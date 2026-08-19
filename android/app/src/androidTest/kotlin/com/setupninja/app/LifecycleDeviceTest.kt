package com.setupninja.app

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.os.ParcelFileDescriptor
import androidx.test.core.app.ActivityScenario
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.platform.app.InstrumentationRegistry
import androidx.test.rule.GrantPermissionRule
import androidx.test.uiautomator.By
import androidx.test.uiautomator.UiDevice
import androidx.test.uiautomator.UiObject2
import androidx.test.uiautomator.Until
import org.junit.After
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class LifecycleDeviceTest {

    private val instrumentation = InstrumentationRegistry.getInstrumentation()
    private val device = UiDevice.getInstance(instrumentation)
    private var originalAirplaneMode: String? = null
    private var originalWifiState: String? = null
    private var originalMobileDataState: String? = null

    @get:Rule
    val cameraPermission: GrantPermissionRule =
        GrantPermissionRule.grant(Manifest.permission.CAMERA)

    @After
    fun restoreDeviceState() {
        device.setOrientationNatural()
        device.waitForIdle()
        device.unfreezeRotation()

        if (originalAirplaneMode != null) {
            shell("cmd connectivity airplane-mode disable")
            restoreService("wifi", originalWifiState)
            restoreService("data", originalMobileDataState)
            if (originalAirplaneMode == "1") {
                shell("cmd connectivity airplane-mode enable")
            }
        }
    }

    @Test
    fun primaryActionSurvivesPortraitLandscapePortraitRotation() {
        device.setOrientationNatural()

        ActivityScenario.launch(MainActivity::class.java).use {
            assertPackagedPageLoaded()
            assertPortrait("initial orientation")
            assertPrimaryActionReady()

            device.setOrientationLeft()
            assertTrue(
                "Display did not reach landscape after rotation",
                device.wait(Until.hasObject(By.text("SetupNinja")), UI_TIMEOUT_MS) &&
                    waitForDisplayShape(landscape = true),
            )
            assertPrimaryActionReady()

            device.setOrientationNatural()
            assertTrue(
                "Display did not return to portrait after rotation",
                device.wait(Until.hasObject(By.text("SetupNinja")), UI_TIMEOUT_MS) &&
                    waitForDisplayShape(landscape = false),
            )
            assertPrimaryActionResponds()
        }
    }

    @Test
    fun primaryActionRecoversAfterBackgroundForegroundAndRelaunch() {
        val firstLaunch = ActivityScenario.launch(MainActivity::class.java)
        try {
            assertPackagedPageLoaded()
            assertPrimaryActionReady()

            device.pressHome()
            assertTrue(
                "App did not leave the foreground after HOME",
                waitForPackageForeground(expectedForeground = false),
            )

            launchFromHomeScreen()
            assertTrue(
                "App did not return to the foreground from HOME",
                waitForPackageForeground(expectedForeground = true),
            )
            assertPackagedPageLoaded()
            assertPrimaryActionResponds()
        } finally {
            firstLaunch.close()
        }

        ActivityScenario.launch(MainActivity::class.java).use {
            assertPackagedPageLoaded()
            assertPrimaryActionResponds()
        }
    }

    @Test
    fun packagedContentAndPrimaryActionWorkWithDeviceNetworksDisabled() {
        val targetContext = instrumentation.targetContext
        assertEquals(
            "Feedback sync requires INTERNET while the core workflow must remain offline-capable",
            PackageManager.PERMISSION_GRANTED,
            targetContext.packageManager.checkPermission(
                Manifest.permission.INTERNET,
                targetContext.packageName,
            ),
        )

        originalAirplaneMode = setting("airplane_mode_on")
        originalWifiState = setting("wifi_on")
        originalMobileDataState = setting("mobile_data")

        shell("cmd connectivity airplane-mode enable")
        shell("svc wifi disable")
        shell("svc data disable")
        assertTrue(
            "Device did not enter airplane mode for the offline launch",
            waitForSetting("airplane_mode_on", "1"),
        )
        assertTrue(
            "Wi-Fi did not turn off for the offline launch",
            waitForSetting("wifi_on", "0"),
        )

        ActivityScenario.launch(MainActivity::class.java).use {
            assertPackagedPageLoaded()
            assertPrimaryActionResponds()
        }
    }

    private fun assertPackagedPageLoaded() {
        assertTrue(
            "Bundled SetupNinja content did not load; foreground=${device.currentPackageName}",
            device.wait(Until.hasObject(By.text("SetupNinja")), UI_TIMEOUT_MS),
        )
        assertTrue(
            "Bundled job setup controls did not load",
            device.wait(Until.hasObject(By.text("Quick demo")), UI_TIMEOUT_MS),
        )
    }

    private fun assertPrimaryActionReady(): UiObject2 {
        val action = device.wait(
            Until.findObject(By.text("Run checks").enabled(true)),
            UI_TIMEOUT_MS,
        )
        assertNotNull(
            "Run checks was not visible and enabled; foreground=${device.currentPackageName}",
            action,
        )
        action!!
        assertTrue("Run checks was outside the visible display", action.visibleBounds.run {
            width() > 0 && height() > 0 && left >= 0 && top >= 0 && right <= device.displayWidth &&
                bottom <= device.displayHeight
        })
        return action
    }

    private fun assertPrimaryActionResponds() {
        val action = assertPrimaryActionReady()
        val center = action.visibleCenter
        assertTrue(
            "UI Automator could not tap Run checks at $center",
            device.click(center.x, center.y),
        )
        assertTrue(
            "Run checks did not react after the lifecycle transition",
            device.wait(Until.hasObject(By.textStartsWith("Checking")), RESPONSE_TIMEOUT_MS) ||
                device.hasObject(By.text("Check again")),
        )
        assertTrue(
            "Verification did not complete after the lifecycle transition",
            device.wait(Until.hasObject(By.text("Check again").enabled(true)), UI_TIMEOUT_MS),
        )
    }

    private fun assertPortrait(context: String) {
        assertTrue(
            "Display was not portrait during $context: ${device.displayWidth}x${device.displayHeight}",
            waitForDisplayShape(landscape = false),
        )
    }

    private fun waitForDisplayShape(landscape: Boolean): Boolean {
        val deadline = System.currentTimeMillis() + UI_TIMEOUT_MS
        while (System.currentTimeMillis() < deadline) {
            val isLandscape = device.displayWidth > device.displayHeight
            if (isLandscape == landscape) return true
            Thread.sleep(POLL_INTERVAL_MS)
        }
        return false
    }

    private fun launchFromHomeScreen() {
        val intent = instrumentation.targetContext.packageManager
            .getLaunchIntentForPackage(PACKAGE_NAME)
        assertNotNull("No launcher intent found for $PACKAGE_NAME", intent)
        intent!!.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        instrumentation.targetContext.startActivity(intent)
    }

    private fun waitForPackageForeground(expectedForeground: Boolean): Boolean {
        val deadline = System.currentTimeMillis() + UI_TIMEOUT_MS
        while (System.currentTimeMillis() < deadline) {
            if ((device.currentPackageName == PACKAGE_NAME) == expectedForeground) return true
            Thread.sleep(POLL_INTERVAL_MS)
        }
        return false
    }

    private fun setting(name: String): String = shell("settings get global $name").trim()

    private fun waitForSetting(name: String, expected: String): Boolean {
        val deadline = System.currentTimeMillis() + NETWORK_TIMEOUT_MS
        while (System.currentTimeMillis() < deadline) {
            if (setting(name) == expected) return true
            Thread.sleep(POLL_INTERVAL_MS)
        }
        return false
    }

    private fun restoreService(service: String, originalState: String?) {
        when (originalState) {
            "1" -> shell("svc $service enable")
            "0" -> shell("svc $service disable")
        }
    }

    private fun shell(command: String): String {
        val descriptor = instrumentation.uiAutomation.executeShellCommand(command)
        return ParcelFileDescriptor.AutoCloseInputStream(descriptor)
            .bufferedReader()
            .use { it.readText() }
    }

    private companion object {
        const val PACKAGE_NAME = "com.setupninja.app"
        const val UI_TIMEOUT_MS = 20_000L
        const val RESPONSE_TIMEOUT_MS = 3_000L
        const val NETWORK_TIMEOUT_MS = 10_000L
        const val POLL_INTERVAL_MS = 250L
    }
}
