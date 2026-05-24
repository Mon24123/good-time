const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const platform = process.argv[2];

if (platform === "mac") {
  const source = path.join(root, "assets", "icon.icns");
  const target = path.join(
    root,
    "dist",
    "好时光-darwin-arm64",
    "好时光.app",
    "Contents",
    "Resources",
    "electron.icns"
  );

  if (!fs.existsSync(source)) {
    throw new Error(`Icon source not found: ${source}`);
  }
  if (!fs.existsSync(path.dirname(target))) {
    throw new Error(`Packaged app resources not found: ${path.dirname(target)}`);
  }

  fs.copyFileSync(source, target);
  console.log("Applied macOS app icon.");
  process.exit(0);
}

throw new Error(`Unsupported platform: ${platform || "(missing)"}`);
