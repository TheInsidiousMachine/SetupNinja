package com.setupninja.app

import android.Manifest
import androidx.test.core.app.ActivityScenario
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import androidx.test.rule.GrantPermissionRule
import androidx.test.uiautomator.By
import androidx.test.uiautomator.BySelector
import androidx.test.uiautomator.UiDevice
import androidx.test.uiautomator.Until
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class MainActivityDeviceTest {

    @get:Rule
    val cameraPermission: GrantPermissionRule =
        GrantPermissionRule.grant(Manifest.permission.CAMERA)

    @Test
    fun guidedSetupShowsPhotoAndGenerateControls() {
        val device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation())

        ActivityScenario.launch(MainActivity::class.java).use {
            assertTrue(device.wait(Until.hasObject(By.text("SetupNinja")), UI_TIMEOUT_MS))
            device.waitForIdle()

            val guidedSetup = device.wait(
                Until.findObject(By.text("Guided setup")),
                UI_TIMEOUT_MS,
            )
            assertNotNull("Guided setup was not exposed by the WebView", guidedSetup)
            val guidedSetupCenter = guidedSetup.visibleCenter
            assertTrue(
                "UIAutomator could not tap Guided setup",
                device.click(guidedSetupCenter.x, guidedSetupCenter.y),
            )

            assertTrue(
                "Photo control did not appear after selecting Guided setup; " +
                    "tap=$guidedSetupCenter package=${device.currentPackageName}",
                device.waitForObjectWhileScrolling(By.textContains("Take / attach photo")),
            )
            assertTrue(
                "Generate control did not appear after selecting Guided setup",
                device.waitForObjectWhileScrolling(By.textContains("Generate")),
            )
        }
    }

    private fun UiDevice.waitForObjectWhileScrolling(selector: BySelector): Boolean {
        repeat(MAX_SCROLL_ATTEMPTS) {
            if (wait(Until.hasObject(selector), SCROLL_SETTLE_MS)) return true
            swipe(
                displayWidth / 2,
                (displayHeight * 0.85f).toInt(),
                displayWidth / 2,
                (displayHeight * 0.25f).toInt(),
                30,
            )
        }
        return wait(Until.hasObject(selector), SCROLL_SETTLE_MS)
    }

    private companion object {
        const val UI_TIMEOUT_MS = 15_000L
        const val SCROLL_SETTLE_MS = 2_000L
        const val MAX_SCROLL_ATTEMPTS = 6
    }
}
