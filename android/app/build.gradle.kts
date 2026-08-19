import java.util.Properties

plugins {
    id("com.android.application")
}

fun quotedBuildConfig(value: String): String =
    "\"${value.replace("\\", "\\\\").replace("\"", "\\\"")}\""

val signingPropertiesFile = file(
    System.getenv("SETUPNINJA_SIGNING_PROPERTIES")
        ?: "${System.getProperty("user.home")}/.config/setupninja/signing.properties",
)
val signingProperties = Properties().apply {
    if (signingPropertiesFile.isFile) signingPropertiesFile.inputStream().use(::load)
}

android {
    namespace = "com.setupninja.app"
    compileSdk = 37

    defaultConfig {
        applicationId = "com.setupninja.app"
        minSdk = 26
        targetSdk = 37
        versionCode = System.getenv("SETUPNINJA_VERSION_CODE")?.toIntOrNull() ?: 2
        versionName = System.getenv("SETUPNINJA_VERSION_NAME")?.takeIf { it.isNotBlank() } ?: "0.2.0"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
        buildConfigField(
            "String",
            "FEEDBACK_ENDPOINT",
            quotedBuildConfig(System.getenv("SETUPNINJA_FEEDBACK_URL").orEmpty()),
        )
        buildConfigField(
            "String",
            "UPDATE_MANIFEST_URL",
            quotedBuildConfig(System.getenv("SETUPNINJA_UPDATE_URL").orEmpty()),
        )
        buildConfigField(
            "String",
            "FEEDBACK_ISSUE_URL",
            quotedBuildConfig(System.getenv("SETUPNINJA_FEEDBACK_ISSUE_URL").orEmpty()),
        )
        buildConfigField(
            "String",
            "UPDATE_PUBLIC_KEY",
            quotedBuildConfig(System.getenv("SETUPNINJA_UPDATE_PUBLIC_KEY").orEmpty()),
        )
    }

    signingConfigs {
        if (signingProperties.isNotEmpty()) {
            create("demo") {
                storeFile = file(signingProperties.getProperty("storeFile"))
                storePassword = signingProperties.getProperty("storePassword")
                keyAlias = signingProperties.getProperty("keyAlias")
                keyPassword = signingProperties.getProperty("keyPassword")
            }
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro",
            )
            if (signingProperties.isNotEmpty()) signingConfig = signingConfigs.getByName("demo")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    // WebView-only app: no view-binding/compose needed.
    buildFeatures {
        viewBinding = false
        buildConfig = true
    }

}

dependencies {
    implementation("androidx.core:core-ktx:1.13.1")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("androidx.webkit:webkit:1.12.1")
    implementation("androidx.activity:activity-ktx:1.9.3")
    // Storage Access Framework wrapper, for writing onto a USB/CF card over OTG.
    implementation("androidx.documentfile:documentfile:1.0.1")

    androidTestImplementation("androidx.test:core-ktx:1.7.0")
    androidTestImplementation("androidx.test:runner:1.7.0")
    androidTestImplementation("androidx.test:rules:1.7.0")
    androidTestImplementation("androidx.test.ext:junit-ktx:1.3.0")
    androidTestImplementation("androidx.test.uiautomator:uiautomator:2.4.0")
}
