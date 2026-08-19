import { writeReleaseBundle } from "./release.mjs";

function argumentsByName(argv) {
  const values = {};
  for (let index = 0; index < argv.length; index += 2) {
    const name = argv[index];
    const value = argv[index + 1];
    if (!name?.startsWith("--") || value === undefined) throw new Error("release arguments must use --name value pairs");
    values[name.slice(2)] = value;
  }
  return values;
}

const args = argumentsByName(process.argv.slice(2));
const privateKeyPem = process.env.DEMO_UPDATE_SIGNING_KEY_PEM;
const result = await writeReleaseBundle({
  apkPath: args.apk,
  outputDir: args.output,
  versionCode: Number(args["version-code"]),
  versionName: args["version-name"],
  apkUrl: args["apk-url"],
  notes: args.notes,
  privateKeyPem
});
process.stdout.write(`${JSON.stringify(result.manifest)}\n`);
