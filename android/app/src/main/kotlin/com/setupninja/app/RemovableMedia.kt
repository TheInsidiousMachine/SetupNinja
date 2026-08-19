package com.setupninja.app

import android.content.Context
import android.content.Intent
import android.content.UriPermission
import android.net.Uri
import android.provider.DocumentsContract
import androidx.documentfile.provider.DocumentFile
import org.json.JSONArray
import org.json.JSONObject
import java.nio.charset.StandardCharsets

/**
 * Writing programs straight onto a USB stick or CompactFlash card plugged into
 * the phone through an OTG adapter.
 *
 * This is the workflow Clayton described: plug the card into the phone, drop the
 * program on it, move the card to the control. It is deliberately *not* USB
 * mass-storage emulation — Android removed the mass-storage gadget in favour of
 * MTP, and re-enabling it needs root, which no shop phone has. The Storage
 * Access Framework gets to the same place on a stock device: the operator picks
 * the card's root folder once, Android grants persistent access, and every
 * program after that writes without another prompt.
 *
 * The card stays formatted FAT16 by the control's own rules; this only writes
 * files onto it.
 */
class RemovableMedia(private val context: Context) {

    /** Intent that asks the operator to pick the card's root folder. */
    fun pickIntent(): Intent =
        Intent(Intent.ACTION_OPEN_DOCUMENT_TREE).apply {
            addFlags(
                Intent.FLAG_GRANT_READ_URI_PERMISSION or
                    Intent.FLAG_GRANT_WRITE_URI_PERMISSION or
                    Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION,
            )
        }

    /**
     * Remember a folder the operator picked so later writes need no prompt.
     * Android caps how many persisted grants an app may hold, so the oldest is
     * released when a new one arrives.
     */
    fun persist(treeUri: Uri): String = try {
        val flags = Intent.FLAG_GRANT_READ_URI_PERMISSION or Intent.FLAG_GRANT_WRITE_URI_PERMISSION
        context.contentResolver.takePersistableUriPermission(treeUri, flags)
        releaseStaleGrants(keep = treeUri)
        val name = DocumentFile.fromTreeUri(context, treeUri)?.name ?: "selected folder"
        JSONObject()
            .put("ok", true)
            .put("uri", treeUri.toString())
            .put("name", name)
            .toString()
    } catch (error: Exception) {
        errorJson("PERSIST_FAILED", "Android would not keep access to that folder.", error.message)
    }

    /** Folders the operator has already granted, newest last. */
    fun targets(): String {
        val array = JSONArray()
        for (permission in context.contentResolver.persistedUriPermissions) {
            if (!permission.isWritePermission) continue
            val document = runCatching { DocumentFile.fromTreeUri(context, permission.uri) }.getOrNull()
            array.put(
                JSONObject()
                    .put("uri", permission.uri.toString())
                    .put("name", document?.name ?: "Removable media")
                    .put("available", document?.canWrite() == true),
            )
        }
        return array.toString()
    }

    /**
     * Write a program into a granted folder.
     *
     * Controls generally reject a file they are already reading, so an existing
     * file of the same name is replaced rather than appended to, and the write
     * is verified by reading the length back before reporting success.
     */
    fun write(treeUriString: String?, fileName: String?, contents: String?): String {
        if (contents.isNullOrEmpty()) {
            return errorJson("EMPTY_CONTENTS", "The program is empty and was not written.")
        }
        val treeUri = runCatching { Uri.parse(treeUriString.orEmpty()) }.getOrNull()
            ?: return errorJson("NO_TARGET", "No removable media folder has been chosen yet.")

        if (!hasGrant(treeUri)) {
            return errorJson(
                "PERMISSION_LOST",
                "Access to that folder was withdrawn. Choose the card again.",
            )
        }

        val folder = DocumentFile.fromTreeUri(context, treeUri)
            ?: return errorJson("TARGET_UNAVAILABLE", "That folder is no longer reachable.")
        if (!folder.canWrite()) {
            return errorJson(
                "TARGET_UNAVAILABLE",
                "The card is not writable. Check it is still plugged in and not write-protected.",
            )
        }

        val safeName = sanitizeFileName(fileName)
        return try {
            folder.findFile(safeName)?.takeIf { it.isFile }?.delete()

            // Controls want plain bytes; an octet-stream MIME stops the provider
            // renaming a .nc file to .txt.
            val file = folder.createFile("application/octet-stream", safeName)
                ?: return errorJson("CREATE_FAILED", "The card would not accept a new file.")

            val bytes = contents.toByteArray(StandardCharsets.UTF_8)
            context.contentResolver.openOutputStream(file.uri, "wt")?.use { output ->
                output.write(bytes)
                output.flush()
            } ?: return errorJson("WRITE_FAILED", "Android did not provide a writable stream.")

            val written = DocumentFile.fromSingleUri(context, file.uri)?.length() ?: -1
            if (written != bytes.size.toLong()) {
                return errorJson(
                    "SHORT_WRITE",
                    "The card reported $written bytes but the program is ${bytes.size}. " +
                        "Do not run it; write it again.",
                )
            }

            JSONObject()
                .put("ok", true)
                .put("fileName", file.name ?: safeName)
                .put("location", folder.name ?: "removable media")
                .put("bytes", bytes.size)
                .toString()
        } catch (error: SecurityException) {
            errorJson("PERMISSION_LOST", "Android denied access to the card.", error.message)
        } catch (error: Exception) {
            errorJson("WRITE_FAILED", "The program could not be written to the card.", error.message)
        }
    }

    private fun hasGrant(treeUri: Uri): Boolean =
        context.contentResolver.persistedUriPermissions.any {
            it.uri == treeUri && it.isWritePermission
        }

    private fun releaseStaleGrants(keep: Uri) {
        val grants: List<UriPermission> = context.contentResolver.persistedUriPermissions
        if (grants.size <= MAX_PERSISTED_GRANTS) return
        grants
            .filter { it.uri != keep }
            .sortedBy { it.persistedTime }
            .take(grants.size - MAX_PERSISTED_GRANTS)
            .forEach { stale ->
                runCatching {
                    context.contentResolver.releasePersistableUriPermission(
                        stale.uri,
                        Intent.FLAG_GRANT_READ_URI_PERMISSION or Intent.FLAG_GRANT_WRITE_URI_PERMISSION,
                    )
                }
            }
    }

    /**
     * Controls that need FAT16 media also expect 8.3 names, so the stem is
     * capped at eight characters and the extension at three.
     */
    private fun sanitizeFileName(fileName: String?): String {
        val leaf = fileName.orEmpty().trim().replace('\\', '/').substringAfterLast('/')
        val rawStem = leaf.substringBeforeLast('.', leaf)
        val rawExtension = if (leaf.contains('.')) leaf.substringAfterLast('.') else NC_EXTENSION

        val stem = rawStem.uppercase()
            .replace(UNSAFE_CHARACTERS, "_")
            .trim('_')
            .take(8)
            .ifBlank { DEFAULT_STEM }
        val extension = rawExtension.uppercase().replace(UNSAFE_CHARACTERS, "").take(3)
            .ifBlank { NC_EXTENSION }
        return "$stem.$extension"
    }

    private fun errorJson(code: String, message: String, detail: String? = null): String =
        JSONObject()
            .put("ok", false)
            .put("code", code)
            .put("message", message)
            .apply { if (!detail.isNullOrBlank()) put("detail", detail) }
            .toString()

    private companion object {
        const val NC_EXTENSION = "NC"
        const val DEFAULT_STEM = "PROGRAM"
        const val MAX_PERSISTED_GRANTS = 16
        val UNSAFE_CHARACTERS = Regex("[^A-Z0-9_-]+")
    }
}
