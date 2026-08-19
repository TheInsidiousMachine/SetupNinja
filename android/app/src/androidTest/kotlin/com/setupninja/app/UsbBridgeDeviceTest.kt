package com.setupninja.app

import android.net.Uri
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import org.json.JSONObject
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class UsbBridgeDeviceTest {

    @Test
    fun saveProgramSanitizesNameAndRoundTripsContents() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val contents = "G21\nG90\nM30\n"
        val result = JSONObject(
            UsbBridge(context).saveProgram("../Clayton setup?.tap", contents),
        )

        assertTrue(result.toString(), result.getBoolean("ok"))
        val savedName = result.getString("fileName")
        assertTrue(savedName.endsWith(".nc"))
        assertFalse(savedName.endsWith(".nc.txt"))
        assertFalse(savedName.contains('/'))
        assertFalse(savedName.contains('\\'))
        assertFalse(savedName.contains(".."))

        val uri = Uri.parse(result.getString("uri"))
        if (uri.scheme == "content") {
            val storedName = context.contentResolver.query(
                uri,
                arrayOf("_display_name"),
                null,
                null,
                null,
            )?.use { cursor ->
                assertTrue(cursor.moveToFirst())
                cursor.getString(0)
            }
            assertEquals(savedName, storedName)
        }
        val savedContents = context.contentResolver.openInputStream(uri)
            ?.bufferedReader(Charsets.UTF_8)
            ?.use { it.readText() }
        assertEquals(contents, savedContents)

        if (uri.scheme == "content") {
            context.contentResolver.delete(uri, null, null)
        }
    }

    @Test
    fun saveProgramUsesDistinctNcNamesAcrossRepeatedExports() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val bridge = UsbBridge(context)
        val requested = "collision-${System.currentTimeMillis()}.nc"
        val first = JSONObject(bridge.saveProgram(requested, "G21\nM30\n"))
        val second = JSONObject(bridge.saveProgram(requested, "G21\nM30\n"))

        try {
            assertTrue(first.toString(), first.getBoolean("ok"))
            assertTrue(second.toString(), second.getBoolean("ok"))
            assertTrue(first.getString("fileName").endsWith(".nc"))
            assertTrue(second.getString("fileName").endsWith(".nc"))
            assertFalse(first.getString("fileName") == second.getString("fileName"))
            assertFalse(first.getString("fileName").contains(".nc ("))
            assertFalse(second.getString("fileName").contains(".nc ("))
        } finally {
            for (result in listOf(first, second)) {
                if (result.optBoolean("ok")) {
                    val uri = Uri.parse(result.getString("uri"))
                    if (uri.scheme == "content") context.contentResolver.delete(uri, null, null)
                }
            }
        }
    }

    @Test
    fun saveProgramReturnsStructuredErrorForBlankContents() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val result = JSONObject(UsbBridge(context).saveProgram("part.nc", ""))

        assertFalse(result.toString(), result.getBoolean("ok"))
        assertEquals("EMPTY_CONTENTS", result.getString("code"))
        assertTrue(result.getString("message").isNotBlank())
    }

    @Test
    fun appInfoExposesVersionAndOptionalRelayConfiguration() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val result = JSONObject(UsbBridge(context).appInfo())

        assertTrue(result.getInt("versionCode") >= 1)
        assertTrue(result.getString("versionName").isNotBlank())
        assertTrue(result.has("feedbackEndpoint"))
        assertTrue(result.has("updateManifestUrl"))
    }

    @Test
    fun shareFeedbackRejectsBlankContentWithoutOpeningAnotherApp() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val result = JSONObject(UsbBridge(context).shareFeedback("SetupNinja", "  "))

        assertFalse(result.toString(), result.getBoolean("ok"))
        assertEquals("EMPTY_FEEDBACK", result.getString("code"))
    }

    @Test
    fun updateInstallerRejectsUntrustedAndStalePackages() {
        val context = InstrumentationRegistry.getInstrumentation().targetContext
        val bridge = UsbBridge(context)

        val insecure = JSONObject(bridge.installUpdate("http://example.test/app.apk", "0".repeat(64), 2, "0.2.0", "bad"))
        assertFalse(insecure.toString(), insecure.getBoolean("ok"))
        assertEquals("INVALID_URL", insecure.getString("code"))

        val malformedHash = JSONObject(bridge.installUpdate("https://example.test/app.apk", "nope", 2, "0.2.0", "bad"))
        assertFalse(malformedHash.toString(), malformedHash.getBoolean("ok"))
        assertEquals("INVALID_SHA256", malformedHash.getString("code"))

        val stale = JSONObject(bridge.installUpdate("https://example.test/app.apk", "0".repeat(64), 1, "0.1.0", "bad"))
        assertFalse(stale.toString(), stale.getBoolean("ok"))
        assertEquals("VERSION_NOT_NEWER", stale.getString("code"))
    }
}
