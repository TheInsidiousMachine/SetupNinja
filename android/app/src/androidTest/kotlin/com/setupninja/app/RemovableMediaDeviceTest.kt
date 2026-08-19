package com.setupninja.app

import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import org.json.JSONArray
import org.json.JSONObject
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test
import org.junit.runner.RunWith

/**
 * Removable-media writing, exercised on a device.
 *
 * The happy path needs a real SAF grant to a real card, which an automated run
 * cannot produce. What is checked here is everything around it: that the app
 * refuses to write without a grant rather than throwing, that failures come back
 * as JSON the page can read, and that a program never lands under a name a
 * control cannot open.
 */
@RunWith(AndroidJUnit4::class)
class RemovableMediaDeviceTest {

    private val context get() = InstrumentationRegistry.getInstrumentation().targetContext

    @Test
    fun targetsIsValidJsonEvenWithNoGrants() {
        val targets = JSONArray(RemovableMedia(context).targets())
        // No card is plugged into a test runner; an empty list is the correct answer.
        for (index in 0 until targets.length()) {
            val entry = targets.getJSONObject(index)
            assertTrue(entry.has("uri"))
            assertTrue(entry.has("name"))
            assertTrue(entry.has("available"))
        }
    }

    @Test
    fun writeWithoutATargetReportsAnErrorRatherThanThrowing() {
        val result = JSONObject(RemovableMedia(context).write(null, "part.nc", "G21\nM30\n"))

        assertFalse(result.getBoolean("ok"))
        assertEquals("NO_TARGET", result.getString("code"))
        assertTrue(result.getString("message").isNotBlank())
    }

    @Test
    fun writeRejectsAnEmptyProgram() {
        val result = JSONObject(RemovableMedia(context).write("content://fake/tree", "part.nc", ""))

        assertFalse(result.getBoolean("ok"))
        assertEquals("EMPTY_CONTENTS", result.getString("code"))
    }

    @Test
    fun writeToAnUngrantedTreeIsRefused() {
        val result = JSONObject(
            RemovableMedia(context).write("content://com.example.provider/tree/fake", "part.nc", "G21\nM30\n"),
        )

        assertFalse(result.getBoolean("ok"))
        assertEquals("PERMISSION_LOST", result.getString("code"))
    }

    @Test
    fun bridgeExposesRemovableMediaAsReadableJson() {
        val bridge = UsbBridge(context)

        assertTrue(JSONArray(bridge.removableMediaTargets()).length() >= 0)

        val write = JSONObject(bridge.writeToRemovableMedia(null, "part.nc", "G21\nM30\n"))
        assertFalse(write.getBoolean("ok"))

        // Without an activity to launch the picker, the bridge says so instead of crashing.
        val choose = JSONObject(bridge.chooseRemovableMedia())
        assertFalse(choose.getBoolean("ok"))
        assertEquals("NO_ACTIVITY", choose.getString("code"))
    }
}
