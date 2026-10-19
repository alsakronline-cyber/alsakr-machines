// After a static export with a basePath, prefix raw public-asset URLs (images, catalog)
// that are written as plain strings rather than through next/link.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
if (!base) process.exit(0);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const pattern = /(["'(])\/(img\/|automation-catalog\.pdf)/g;
let changed = 0;
for (const file of walk("out").filter((f) => /\.(html|js|txt|css)$/.test(f))) {
  const src = readFileSync(file, "utf8");
  const out = src.replace(pattern, `$1${base}/$2`);
  if (out !== src) { writeFileSync(file, out); changed++; }
}
console.log(`prefix-assets: updated ${changed} files with ${base}`);
