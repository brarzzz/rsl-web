import { execSync } from "node:child_process";
import { rmSync } from "node:fs";
import path from "node:path";

const themeDir = path.resolve("shopify");
const zipName = path.resolve("shopify-theme.zip");

try {
  rmSync(zipName, { force: true });
} catch (error) {
  console.warn("Unable to remove existing zip:", error);
}

try {
  execSync(`zip -r ${zipName} ${themeDir}`, { stdio: "inherit" });
  console.log(`Shopify theme packaged at ${zipName}`);
} catch (error) {
  console.error("Failed to create zip. Ensure the 'zip' utility is installed.");
  process.exit(1);
}
