#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ANDROID_PROJECT="$PROJECT_ROOT/android"
ARTIFACT_DIR="$PROJECT_ROOT/test-results/android"
DEVICE_SERIAL="${ANDROID_SERIAL:-R3GL405E98X}"
export ANDROID_SERIAL="$DEVICE_SERIAL"

export PATH="$HOME/.local/opt/jdk-21/bin:$HOME/Android/Sdk/platform-tools:$PATH"
export JAVA_HOME="$HOME/.local/opt/jdk-21"
export ANDROID_HOME="$HOME/Android/Sdk"
export ANDROID_SDK_ROOT="$ANDROID_HOME"

ADB=(adb -s "$DEVICE_SERIAL")
APK="$ANDROID_PROJECT/app/build/outputs/apk/debug/app-debug.apk"

mkdir -p "$ARTIFACT_DIR"

if ! adb devices | awk -v serial="$DEVICE_SERIAL" '$1 == serial && $2 == "device" { found=1 } END { exit !found }'; then
  echo "Android device $DEVICE_SERIAL is not connected and authorized." >&2
  exit 1
fi

"${ADB[@]}" shell svc power stayon usb
"${ADB[@]}" shell input keyevent KEYCODE_WAKEUP
"${ADB[@]}" shell wm dismiss-keyguard || true
"${ADB[@]}" shell input keyevent KEYCODE_HOME

cd "$PROJECT_ROOT"
npm run build
rsync -a --delete dist/ android/app/src/main/assets/www/

cd "$ANDROID_PROJECT"
./gradlew :app:assembleDebug
"${ADB[@]}" install -r "$APK"
"${ADB[@]}" shell pm grant com.setupninja.app android.permission.CAMERA || true
./gradlew :app:connectedDebugAndroidTest
"${ADB[@]}" install -r "$APK"
"${ADB[@]}" shell pm grant com.setupninja.app android.permission.CAMERA || true

"${ADB[@]}" logcat -c
"${ADB[@]}" shell am force-stop com.setupninja.app
"${ADB[@]}" shell am start -W -n com.setupninja.app/.MainActivity

app_ready=false
for _ in $(seq 1 20); do
  "${ADB[@]}" shell uiautomator dump /sdcard/setupninja-final.xml >/dev/null
  "${ADB[@]}" exec-out cat /sdcard/setupninja-final.xml > "$ARTIFACT_DIR/window.xml"
  if rg -q 'text="SetupNinja"' "$ARTIFACT_DIR/window.xml"; then
    app_ready=true
    break
  fi
  sleep 0.5
done

"${ADB[@]}" exec-out screencap -p > "$ARTIFACT_DIR/device.png"
"${ADB[@]}" logcat -d -t 1200 > "$ARTIFACT_DIR/logcat.txt"

if rg -n "FATAL EXCEPTION|AndroidRuntime.*FATAL|Uncaught|ERR_FILE_NOT_FOUND|net::ERR_" "$ARTIFACT_DIR/logcat.txt"; then
  echo "Android runtime failure found in $ARTIFACT_DIR/logcat.txt" >&2
  exit 1
fi

if [[ "$app_ready" != true ]]; then
  echo "SetupNinja was not present in the final Android accessibility tree." >&2
  exit 1
fi

echo "Android device checks passed. Artifacts: $ARTIFACT_DIR"
