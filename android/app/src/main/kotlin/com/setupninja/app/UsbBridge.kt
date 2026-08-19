package com.setupninja.app

import android.content.ContentValues
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.provider.MediaStore
import android.webkit.JavascriptInterface
import androidx.annotation.RequiresApi
import org.json.JSONObject
import java.io.File
import java.io.IOException
import java.nio.charset.StandardCharsets
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.Locale
import java.util.UUID

/** Native storage operations exposed to the bundled web app as `window.AndroidUsb`. */
class UsbBridge(
    private val context: Context,
    private val removableMedia: RemovableMedia = RemovableMedia(context),
    /** Asks the host activity to launch the folder picker. Null outside an activity. */
    private val requestMediaPicker: (() -> Unit)? = null,
) {

    private val updateInstaller = UpdateInstaller(context)

    @JavascriptInterface
    fun listDevices(): String = "[]"

    // --- Removable media (USB stick / CompactFlash over OTG) -----------------

    /**
     * Ask the operator to pick the card's root folder. The result arrives back
     * in the page through `window.onRemovableMediaPicked`, because a
     * JavascriptInterface method cannot block waiting for an activity result.
     */
    @JavascriptInterface
    fun chooseRemovableMedia(): String {
        val launcher = requestMediaPicker
            ?: return errorJson("NO_ACTIVITY", "The folder picker is unavailable in this context.")
        return try {
            launcher()
            JSONObject().put("ok", true).put("pending", true).toString()
        } catch (error: Exception) {
            errorJson("PICKER_FAILED", "Android could not open the folder picker.", error.message)
        }
    }

    /** Folders already granted, so the app can write without prompting again. */
    @JavascriptInterface
    fun removableMediaTargets(): String = removableMedia.targets()

    /** Write a program straight onto the chosen card. */
    @JavascriptInterface
    fun writeToRemovableMedia(treeUri: String?, fileName: String?, contents: String?): String =
        removableMedia.write(treeUri, fileName, contents)

    @JavascriptInterface
    fun appInfo(): String = JSONObject()
        .put("versionCode", BuildConfig.VERSION_CODE)
        .put("versionName", BuildConfig.VERSION_NAME)
        .put("feedbackEndpoint", BuildConfig.FEEDBACK_ENDPOINT)
        .put("updateManifestUrl", BuildConfig.UPDATE_MANIFEST_URL)
        .put("feedbackIssueUrl", BuildConfig.FEEDBACK_ISSUE_URL)
        .toString()

    /** Opens the configured GitHub issue form without exposing any app secret to JavaScript. */
    @JavascriptInterface
    fun openExternalUrl(url: String?): String {
        val uri = runCatching { Uri.parse(url.orEmpty()) }.getOrNull()
        val trusted = uri != null &&
            uri.scheme == "https" &&
            uri.host == "github.com" &&
            uri.path.orEmpty().startsWith("/TheInsidiousMachine/SetupNinja/issues/new")
        if (!trusted) {
            return errorJson("UNTRUSTED_URL", "Only the configured GitHub feedback page can be opened.")
        }
        return try {
            val intent = Intent(Intent.ACTION_VIEW, uri).apply {
                if (context !is android.app.Activity) addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            }
            context.startActivity(intent)
            JSONObject().put("ok", true).put("method", "BROWSER").toString()
        } catch (error: Exception) {
            errorJson("OPEN_FAILED", "Android could not open the GitHub feedback page.", error.message)
        }
    }

    /** Opens Android's share sheet so feedback can still be submitted without a configured relay. */
    @JavascriptInterface
    fun shareFeedback(subject: String?, body: String?): String {
        val safeBody = body.orEmpty().trim().take(MAX_FEEDBACK_LENGTH)
        if (safeBody.isBlank()) {
            return errorJson("EMPTY_FEEDBACK", "Feedback is empty and was not shared.")
        }
        val safeSubject = subject.orEmpty().trim().take(MAX_SUBJECT_LENGTH)
            .ifBlank { "SetupNinja feedback" }
        return try {
            val sendIntent = Intent(Intent.ACTION_SEND).apply {
                type = "text/plain"
                putExtra(Intent.EXTRA_SUBJECT, safeSubject)
                putExtra(Intent.EXTRA_TEXT, safeBody)
            }
            val chooser = Intent.createChooser(sendIntent, "Send SetupNinja feedback").apply {
                if (context !is android.app.Activity) addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            }
            context.startActivity(chooser)
            JSONObject().put("ok", true).put("method", "ANDROID_SHARE").toString()
        } catch (error: Exception) {
            errorJson("SHARE_FAILED", "Android could not open the share sheet.", error.message)
        }
    }

    /**
     * Downloads an HTTPS APK, verifies its SHA-256, then opens Android's package installer.
     * Android always retains the final user confirmation; silent installs are intentionally unsupported.
     */
    @JavascriptInterface
    fun installUpdate(
        apkUrl: String?,
        sha256: String?,
        versionCode: Int,
        versionName: String?,
        signature: String?,
    ): String = updateInstaller.start(apkUrl, sha256, versionCode, versionName, signature)

    @JavascriptInterface
    fun updateStatus(): String = updateInstaller.status()

    /**
     * Saves UTF-8 G-code and returns a JSON object suitable for direct JavaScript parsing.
     *
     * Android 10+ writes to the public Downloads/SetupNinja collection through MediaStore.
     * Android 8-9 writes to the app's external Documents/SetupNinja directory without asking
     * for broad storage access.
     */
    @JavascriptInterface
    fun saveProgram(fileName: String?, contents: String?): String {
        if (contents.isNullOrBlank()) {
            return errorJson(
                code = "EMPTY_CONTENTS",
                message = "The program is empty and was not saved.",
            )
        }

        val safeFileName = sanitizeFileName(fileName)
        return try {
            val saved = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                saveToDownloads(safeFileName, contents)
            } else {
                saveToExternalDocuments(safeFileName, contents)
            }
            successJson(saved, contents.toByteArray(StandardCharsets.UTF_8).size)
        } catch (error: SecurityException) {
            errorJson(
                code = "STORAGE_PERMISSION_DENIED",
                message = "Android denied access to the selected storage location.",
                detail = error.message,
            )
        } catch (error: IOException) {
            errorJson(
                code = "WRITE_FAILED",
                message = "The program could not be written to storage.",
                detail = error.message,
            )
        } catch (error: Exception) {
            errorJson(
                code = "SAVE_FAILED",
                message = "The program could not be saved.",
                detail = error.message,
            )
        }
    }

    @RequiresApi(Build.VERSION_CODES.Q)
    private fun saveToDownloads(fileName: String, contents: String): SavedProgram {
        val resolver = context.contentResolver
        val availableFileName = timestampedDownloadName(fileName)
        val values = ContentValues().apply {
            put(MediaStore.Downloads.DISPLAY_NAME, availableFileName)
            // text/plain makes some MediaStore implementations append ".txt" to CNC files.
            put(MediaStore.Downloads.MIME_TYPE, "application/octet-stream")
            put(
                MediaStore.Downloads.RELATIVE_PATH,
                "${Environment.DIRECTORY_DOWNLOADS}/$PROGRAM_DIRECTORY",
            )
            put(MediaStore.Downloads.IS_PENDING, 1)
        }
        val uri = resolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values)
            ?: throw IOException("MediaStore did not create a Downloads entry.")

        try {
            resolver.openOutputStream(uri, "w")?.use { output ->
                output.write(contents.toByteArray(StandardCharsets.UTF_8))
                output.flush()
            } ?: throw IOException("Android did not provide a writable output stream.")

            val complete = ContentValues().apply {
                put(MediaStore.Downloads.IS_PENDING, 0)
            }
            if (resolver.update(uri, complete, null, null) != 1) {
                throw IOException("The Downloads entry could not be finalized.")
            }
        } catch (error: Exception) {
            resolver.delete(uri, null, null)
            throw error
        }

        return SavedProgram(
            fileName = resolver.query(
                uri,
                arrayOf(MediaStore.Downloads.DISPLAY_NAME),
                null,
                null,
                null,
            )?.use { cursor ->
                if (cursor.moveToFirst()) cursor.getString(0) else null
            } ?: availableFileName,
            uri = uri,
            location = "${Environment.DIRECTORY_DOWNLOADS}/$PROGRAM_DIRECTORY",
            storage = "MEDIASTORE_DOWNLOADS",
        )
    }

    private fun timestampedDownloadName(fileName: String): String {
        val stem = fileName.removeSuffix(NC_EXTENSION)
        val timestamp = LocalDateTime.now().format(DOWNLOAD_TIMESTAMP_FORMAT)
        val unique = UUID.randomUUID().toString().take(4)
        return "$stem-$timestamp-$unique$NC_EXTENSION"
    }

    private fun saveToExternalDocuments(fileName: String, contents: String): SavedProgram {
        val documents = context.getExternalFilesDir(Environment.DIRECTORY_DOCUMENTS)
            ?: throw IOException("External Documents storage is unavailable.")
        val outputDirectory = File(documents, PROGRAM_DIRECTORY)
        if (!outputDirectory.exists() && !outputDirectory.mkdirs()) {
            throw IOException("The app Documents directory could not be created.")
        }
        if (!outputDirectory.isDirectory) {
            throw IOException("The app Documents location is not a directory.")
        }

        val outputFile = uniqueFile(outputDirectory, fileName)
        outputFile.outputStream().use { output ->
            output.write(contents.toByteArray(StandardCharsets.UTF_8))
            output.flush()
        }

        return SavedProgram(
            fileName = outputFile.name,
            uri = Uri.fromFile(outputFile),
            location = outputDirectory.absolutePath,
            storage = "APP_EXTERNAL_DOCUMENTS",
        )
    }

    private fun uniqueFile(directory: File, fileName: String): File {
        val requested = File(directory, fileName)
        if (!requested.exists()) return requested

        val stem = fileName.removeSuffix(NC_EXTENSION)
        var suffix = 1
        while (suffix < MAX_COLLISION_ATTEMPTS) {
            val candidate = File(directory, "$stem ($suffix)$NC_EXTENSION")
            if (!candidate.exists()) return candidate
            suffix += 1
        }
        throw IOException("Too many programs already use this file name.")
    }

    private fun sanitizeFileName(fileName: String?): String {
        val leafName = fileName.orEmpty()
            .trim()
            .replace('\\', '/')
            .substringAfterLast('/')
        val stem = leafName
            .substringBeforeLast('.', leafName)
            .replace(UNSAFE_FILE_NAME_CHARACTERS, "_")
            .trim('_', '-', '.')
            .take(MAX_STEM_LENGTH)
            .ifBlank { DEFAULT_FILE_STEM }
        return "$stem$NC_EXTENSION"
    }

    private fun successJson(saved: SavedProgram, byteCount: Int): String =
        JSONObject()
            .put("ok", true)
            .put("fileName", saved.fileName)
            .put("uri", saved.uri.toString())
            .put("location", saved.location)
            .put("storage", saved.storage)
            .put("bytes", byteCount)
            .toString()

    private fun errorJson(code: String, message: String, detail: String? = null): String =
        JSONObject()
            .put("ok", false)
            .put("code", code)
            .put("message", message)
            .apply {
                if (!detail.isNullOrBlank()) put("detail", detail)
            }
            .toString()

    private data class SavedProgram(
        val fileName: String,
        val uri: Uri,
        val location: String,
        val storage: String,
    )

    private companion object {
        const val PROGRAM_DIRECTORY = "SetupNinja"
        const val NC_EXTENSION = ".nc"
        const val DEFAULT_FILE_STEM = "setupninja_program"
        const val MAX_STEM_LENGTH = 64
        const val MAX_COLLISION_ATTEMPTS = 10_000
        const val MAX_FEEDBACK_LENGTH = 50_000
        const val MAX_SUBJECT_LENGTH = 120
        val UNSAFE_FILE_NAME_CHARACTERS = Regex("[^A-Za-z0-9_-]+")
        val DOWNLOAD_TIMESTAMP_FORMAT: DateTimeFormatter =
            DateTimeFormatter.ofPattern("yyyyMMdd-HHmmss", Locale.US)
    }
}
