# Development

Use Node.js 22.12+ and install the locked dependencies with `npm ci`.

```sh
npm test
npm run soak -- 600
```

On Windows, run `npm run verify:visual` to exercise the rendered game, gift effects and layouts. On a Linux machine with a graphical test environment, use `xvfb-run -a npm run verify:visual`. This visual command is separate from the unit/integration CI job and requires a working Electron runtime.

Tests and visual checks should use temporary data directories. Do not commit real viewer saves, avatar caches, cookies, signed connection URLs, browser profiles or logs. Generated QA output belongs in `verification/`; curated documentation screenshots belong in `docs/screenshots/`.

Keep changes to game rules accompanied by meaningful tests in `tests/`. For camera, layout or model changes, inspect portrait and landscape screenshots as well. Test a real LIVE room separately when changing the connector.

Vendored transport source and runtime files must stay in sync. Preserve the upstream revision and local-change notes in `server/vendor/ttl-live/UPSTREAM.json`, along with all upstream license files. Some vendor scripts reference the original monorepo; see its README before rebuilding the connector.

To create a portable Windows folder, run `npm run build`. The script intentionally refuses to replace an existing `release/Live Loop Racers` directory. `node scripts/update-build.cjs` updates an existing portable folder; it is not a fresh-build command.

Before sharing a build, review `THIRD_PARTY_LICENSES.md` and verify the app with OBS on the target machine.
