This folder is a readable reference for the parts of the live site that were edited directly in the built bundle.

Why it exists:
- The current site is served from compiled files like `js/app.a1f030b0.js` and `css/app.fba1e0a3.css`.
- Those files are minified, which makes maintenance painful.
- These reference files rewrite the changed runtime logic in normal formatting so future edits are easier to reason about.

Important:
- The live site does not automatically import files from this folder.
- Runtime behavior still comes from the built files in `js/` and `css/`.
- Treat this folder as readable documentation and a safer starting point for future cleanup or a proper source reconstruction.
