# Demo release output

The gated release workflow writes a signed bundle here on its runner and uploads the bundle to a GitHub Release. Runtime artifacts are ignored; only the directory marker and example manifest are tracked.

Each bundle contains the Android-signed APK and `manifest.json`. Its `signature` field is base64 RSA-SHA256 over the exact canonical UTF-8 string `1\ndemo\n${versionCode}\n${versionName}\n${apkUrl}\n${sha256}\n`. The manifest's SHA-256 field binds the APK bytes to the signed metadata.
