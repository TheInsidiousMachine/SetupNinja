package com.setupninja.app

import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Handler
import android.os.Looper
import android.util.Base64
import androidx.core.content.FileProvider
import org.json.JSONObject
import java.io.File
import java.net.HttpURLConnection
import java.net.URL
import java.security.MessageDigest
import java.security.KeyFactory
import java.security.Signature
import java.security.spec.X509EncodedKeySpec
import java.util.Locale
import java.util.concurrent.atomic.AtomicBoolean
import java.util.concurrent.atomic.AtomicReference

/** Checksum-gated demo APK downloader. The platform package installer owns final approval. */
class UpdateInstaller(private val context: Context) {
    private val running = AtomicBoolean(false)
    private val state = AtomicReference(UpdateState("idle", "No update is in progress."))

    fun start(
        apkUrl: String?,
        sha256: String?,
        versionCode: Int,
        versionName: String?,
        signature: String?,
    ): String {
        val url = runCatching { URL(apkUrl.orEmpty()) }.getOrNull()
        val expectedHash = sha256.orEmpty().lowercase(Locale.US)
        if (url == null || url.host.isBlank() || !trustedArtifactUrl(url)) {
            return error("INVALID_URL", "The update URL must use HTTPS or the private Tailscale relay.")
        }
        if (!SHA256.matches(expectedHash)) {
            return error("INVALID_SHA256", "The update checksum is invalid.")
        }
        if (versionCode <= BuildConfig.VERSION_CODE) {
            return error("VERSION_NOT_NEWER", "The update is not newer than this app.")
        }
        val safeVersionName = versionName.orEmpty().trim()
        if (safeVersionName.isBlank() || safeVersionName.length > 64) {
            return error("INVALID_VERSION", "The update version name is invalid.")
        }
        if (!verifyManifest(url.toString(), expectedHash, versionCode, safeVersionName, signature.orEmpty())) {
            return error("UNTRUSTED_MANIFEST", "The update manifest signature is not trusted.")
        }
        if (!running.compareAndSet(false, true)) {
            return error("UPDATE_BUSY", "Another update is already downloading.")
        }

        state.set(UpdateState("downloading", "Downloading the verified demo update."))
        Thread({ downloadAndInstall(url, expectedHash, versionCode) }, "setupninja-update").start()
        return JSONObject().put("ok", true).put("state", "downloading").toString()
    }

    fun status(): String {
        val current = state.get()
        return JSONObject()
            .put("ok", current.code != "failed")
            .put("state", current.code)
            .put("message", current.message)
            .toString()
    }

    private fun downloadAndInstall(url: URL, expectedHash: String, versionCode: Int) {
        val output = File(context.cacheDir, "updates/setupninja-$versionCode.apk")
        try {
            output.parentFile?.mkdirs()
            val connection = (url.openConnection() as HttpURLConnection).apply {
                connectTimeout = CONNECT_TIMEOUT_MS
                readTimeout = READ_TIMEOUT_MS
                instanceFollowRedirects = false
                setRequestProperty("Accept", "application/vnd.android.package-archive")
            }
            try {
                if (connection.responseCode !in 200..299) {
                    throw IllegalStateException("Update server returned HTTP ${connection.responseCode}.")
                }
                val declaredLength = connection.contentLengthLong
                if (declaredLength > MAX_APK_BYTES) throw IllegalStateException("Update APK is too large.")

                val digest = MessageDigest.getInstance("SHA-256")
                var total = 0L
                connection.inputStream.use { input ->
                    output.outputStream().use { sink ->
                        val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
                        while (true) {
                            val read = input.read(buffer)
                            if (read < 0) break
                            total += read
                            if (total > MAX_APK_BYTES) throw IllegalStateException("Update APK is too large.")
                            digest.update(buffer, 0, read)
                            sink.write(buffer, 0, read)
                        }
                    }
                }
                val actualHash = digest.digest().joinToString("") { "%02x".format(it) }
                if (actualHash != expectedHash) throw SecurityException("Update checksum did not match.")
            } finally {
                connection.disconnect()
            }

            state.set(UpdateState("installing", "Android is ready to confirm the update."))
            Handler(Looper.getMainLooper()).post { openInstaller(output) }
        } catch (error: Exception) {
            output.delete()
            state.set(UpdateState("failed", error.message ?: "The update could not be installed."))
            running.set(false)
        }
    }

    private fun openInstaller(apk: File) {
        try {
            val uri: Uri = FileProvider.getUriForFile(context, "${context.packageName}.fileprovider", apk)
            val intent = Intent(Intent.ACTION_VIEW).apply {
                setDataAndType(uri, "application/vnd.android.package-archive")
                addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                if (context !is android.app.Activity) addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            }
            context.startActivity(intent)
        } catch (error: Exception) {
            state.set(UpdateState("failed", error.message ?: "Android could not open the installer."))
        } finally {
            running.set(false)
        }
    }

    private fun verifyManifest(
        apkUrl: String,
        sha256: String,
        versionCode: Int,
        versionName: String,
        encodedSignature: String,
    ): Boolean = runCatching {
        if (BuildConfig.UPDATE_PUBLIC_KEY.isBlank()) return false
        val publicKey = KeyFactory.getInstance("RSA").generatePublic(
            X509EncodedKeySpec(Base64.decode(BuildConfig.UPDATE_PUBLIC_KEY, Base64.DEFAULT)),
        )
        val verifier = Signature.getInstance("SHA256withRSA")
        verifier.initVerify(publicKey)
        verifier.update(canonicalManifest(apkUrl, sha256, versionCode, versionName).toByteArray(Charsets.UTF_8))
        verifier.verify(Base64.decode(encodedSignature, Base64.DEFAULT))
    }.getOrDefault(false)

    private fun canonicalManifest(
        apkUrl: String,
        sha256: String,
        versionCode: Int,
        versionName: String,
    ): String = "1\ndemo\n$versionCode\n$versionName\n$apkUrl\n$sha256\n"

    private fun error(code: String, message: String): String = JSONObject()
        .put("ok", false)
        .put("code", code)
        .put("message", message)
        .toString()

    private fun trustedArtifactUrl(url: URL): Boolean {
        if (url.protocol == "https") return true
        if (url.protocol != "http") return false
        val octets = url.host.split('.').mapNotNull { it.toIntOrNull() }
        return octets.size == 4 && octets.all { it in 0..255 } &&
            octets[0] == 100 && octets[1] in 64..127
    }

    private data class UpdateState(val code: String, val message: String)

    private companion object {
        val SHA256 = Regex("^[a-f0-9]{64}$")
        const val CONNECT_TIMEOUT_MS = 15_000
        const val READ_TIMEOUT_MS = 60_000
        const val MAX_APK_BYTES = 200L * 1024L * 1024L
    }
}
