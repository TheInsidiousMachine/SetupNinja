package com.setupninja.app

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Bundle
import android.provider.MediaStore
import android.util.Log
import android.view.ViewGroup
import android.webkit.ConsoleMessage
import android.webkit.PermissionRequest
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.FrameLayout
import androidx.activity.OnBackPressedCallback
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import androidx.webkit.WebViewAssetLoader
import java.io.File

/**
 * Single-activity shell that hosts a full-screen WebView loading the bundled SetupNinja web
 * app from android_asset. Two things beyond a stock WebView are wired up here:
 *
 *  1. A file-chooser override so image capture file inputs in the page can
 *     actually launch the system camera (a plain WebView silently no-ops file inputs without
 *     this override).
 *  2. A JavaScript interface, [UsbBridge], as the extension point for the on-machine USB
 *     mass-storage transfer feature that a follow-up task will implement.
 */
class MainActivity : AppCompatActivity() {

    private companion object {
        const val TAG = "SetupNinja"
        const val START_URL = "https://appassets.androidplatform.net/assets/www/index.html"
    }

    private lateinit var webView: WebView

    // Callback supplied by WebChromeClient.onShowFileChooser; resolved once the camera/file
    // picker activity returns a result.
    private var fileChooserCallback: ValueCallback<Array<Uri>>? = null

    // Where we asked the camera app to save the just-taken photo, so we can hand that Uri back
    // to the WebView if the user actually took a picture (as opposed to picking a file / cancelling).
    private var pendingCameraUri: Uri? = null

    private val requestCameraPermission =
        registerForActivityResult(ActivityResultContracts.RequestPermission()) {
            // No-op: WebView's onPermissionRequest is re-evaluated on next camera use.
        }

    private val fileChooserLauncher =
        registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { result ->
            val callback = fileChooserCallback
            fileChooserCallback = null
            if (callback == null) return@registerForActivityResult

            val resultUris: Array<Uri>? = when {
                result.resultCode != RESULT_OK -> null
                result.data?.dataUris() != null -> result.data?.dataUris()
                result.data?.data != null -> arrayOf(result.data!!.data!!)
                pendingCameraUri != null -> arrayOf(pendingCameraUri!!)
                else -> null
            }
            callback.onReceiveValue(resultUris)
            pendingCameraUri = null
        }

    private fun Intent.dataUris(): Array<Uri>? {
        val clipData = clipData ?: return null
        return (0 until clipData.itemCount).mapNotNull { clipData.getItemAt(it).uri }
            .toTypedArray()
            .takeIf { it.isNotEmpty() }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        webView = WebView(this)
        setContentView(webView)
        webView.layoutParams = FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT,
        )

        configureWebView(webView)

        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (webView.canGoBack()) {
                    webView.goBack()
                } else {
                    isEnabled = false
                    onBackPressedDispatcher.onBackPressed()
                }
            }
        })

        // Extension point for the follow-up USB mass-storage task. See UsbBridge.kt.
        webView.addJavascriptInterface(UsbBridge(this), "AndroidUsb")

        webView.loadUrl(START_URL)
    }

    private fun configureWebView(webView: WebView) {
        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        val settings: WebSettings = webView.settings
        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        // Assets are served through WebViewAssetLoader over appassets.androidplatform.net, so
        // Vite's module scripts and workers get a normal HTTPS origin instead of file://.
        settings.allowFileAccess = false
        settings.allowContentAccess = true
        // Tailnet HTTP is allowed only for the exact host in network_security_config.xml. The
        // underlying Tailscale transport is WireGuard-encrypted and APKs remain signature-gated.
        settings.mixedContentMode = WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE
        settings.safeBrowsingEnabled = true

        webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest,
            ): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(request.url)
            }

            override fun shouldOverrideUrlLoading(
                view: WebView,
                request: WebResourceRequest,
            ): Boolean {
                val url = request.url
                val trusted = url.scheme == "https" &&
                    url.host == "appassets.androidplatform.net" &&
                    url.path?.startsWith("/assets/") == true
                if (!trusted) Log.w(TAG, "Blocked WebView navigation to $url")
                return !trusted
            }

            override fun onPageFinished(view: WebView, url: String) {
                Log.i(TAG, "Loaded $url")
            }
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onConsoleMessage(consoleMessage: ConsoleMessage): Boolean {
                Log.d(
                    TAG,
                    "${consoleMessage.messageLevel()}: ${consoleMessage.message()} " +
                        "(${consoleMessage.sourceId()}:${consoleMessage.lineNumber()})",
                )
                return true
            }

            // Required for image capture file inputs to trigger the system
            // camera/file picker from inside the WebView. Without this override, tapping such
            // an input silently does nothing.
            override fun onShowFileChooser(
                webView: WebView,
                filePathCallback: ValueCallback<Array<Uri>>,
                fileChooserParams: FileChooserParams,
            ): Boolean {
                fileChooserCallback?.onReceiveValue(null)
                fileChooserCallback = filePathCallback

                if (ContextCompat.checkSelfPermission(this@MainActivity, Manifest.permission.CAMERA)
                    != PackageManager.PERMISSION_GRANTED
                ) {
                    requestCameraPermission.launch(Manifest.permission.CAMERA)
                }

                val intent = buildChooserIntent(fileChooserParams)
                fileChooserLauncher.launch(intent)
                return true
            }

            // Grants the WebView content's own camera permission request (used by getUserMedia-
            // style APIs) once the app itself holds android.permission.CAMERA.
            override fun onPermissionRequest(request: PermissionRequest) {
                if (request.origin.scheme != "https" ||
                    request.origin.host != "appassets.androidplatform.net"
                ) {
                    request.deny()
                    return
                }
                val resources = request.resources
                val grantable = resources.filter {
                    it == PermissionRequest.RESOURCE_VIDEO_CAPTURE &&
                        ContextCompat.checkSelfPermission(
                            this@MainActivity,
                            Manifest.permission.CAMERA,
                        ) == PackageManager.PERMISSION_GRANTED
                }
                if (grantable.isNotEmpty()) {
                    request.grant(grantable.toTypedArray())
                } else {
                    request.deny()
                }
            }
        }
    }

    /** Builds a chooser Intent that offers "take photo" alongside the system document/file picker. */
    private fun buildChooserIntent(params: WebChromeClient.FileChooserParams): Intent {
        val contentSelectionIntent = Intent(Intent.ACTION_GET_CONTENT).apply {
            addCategory(Intent.CATEGORY_OPENABLE)
            type = "*/*"
            val mimeTypes = params.acceptTypes?.filter { it.isNotBlank() }?.toTypedArray()
            if (!mimeTypes.isNullOrEmpty()) {
                putExtra(Intent.EXTRA_MIME_TYPES, mimeTypes)
                type = mimeTypes.firstOrNull { it.contains("/") } ?: "*/*"
            }
        }

        val captureIntents = mutableListOf<Intent>()
        val wantsCamera = params.isCaptureEnabled ||
            params.acceptTypes?.any { it.startsWith("image/") } == true
        if (wantsCamera) {
            createCameraIntent()?.let { captureIntents.add(it) }
        }

        val chooser = Intent(Intent.ACTION_CHOOSER).apply {
            putExtra(Intent.EXTRA_INTENT, contentSelectionIntent)
            putExtra(Intent.EXTRA_TITLE, "Choose a photo")
            if (captureIntents.isNotEmpty()) {
                putExtra(Intent.EXTRA_INITIAL_INTENTS, captureIntents.toTypedArray())
            }
        }
        return chooser
    }

    private fun createCameraIntent(): Intent? {
        val photoFile = File(cacheDir, "setupninja_capture_${System.currentTimeMillis()}.jpg")
        val photoUri = FileProvider.getUriForFile(
            this,
            "$packageName.fileprovider",
            photoFile,
        )
        pendingCameraUri = photoUri
        return Intent(MediaStore.ACTION_IMAGE_CAPTURE).apply {
            putExtra(MediaStore.EXTRA_OUTPUT, photoUri)
            addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION)
        }
    }

}
