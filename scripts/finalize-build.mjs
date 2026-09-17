import { writeFile } from "node:fs/promises";

// dist/cjs holds CommonJS output emitted with a plain ".js" extension. Without
// this package.json, Node would interpret those files as ESM because the
// package root declares "type": "module".
await writeFile("dist/cjs/package.json", `${JSON.stringify({ type: "commonjs" }, null, 2)}\n`);
