# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single static site: a personal landing page built with **Astro 7** (+ React, Tailwind CSS v4, Biome). There is no backend, database, or other service — the only thing to "run" is the Astro dev server.

### Node version gotcha
- `.nvmrc` pins Node `v24.11.0`, which is installed via `nvm` and is the default `nvm` alias. However, the VM has a baked-in `/exec-daemon/node` (v22.x) that appears earlier in `PATH` and shadows nvm's node in fresh shells. `package.json` `engines` only requires `>=22.12.0`, so both versions work, but to match `.nvmrc` exactly prepend nvm's bin first, e.g. `export PATH="$HOME/.nvm/versions/node/v24.11.0/bin:$PATH"` (or run `nvm use`). `pnpm` (via corepack) lives in the nvm node bin.

### Commands (run from repo root)
- Dev server: `pnpm dev` (add `--host` to expose on the network) → serves at `http://localhost:4321/`. Supports hot module reload.
- Lint: `pnpm check` (Biome over `./src`); auto-fix with `pnpm check:fix`.
- Build: `pnpm build` (runs `astro check` type-checking, then `astro build`; output in `dist/`).
- Preview built site: `pnpm preview`.
- See `README.md` / `package.json` scripts for the full list.

### Notes
- `pnpm install` prints a warning that build scripts for `esbuild` and `sharp` are ignored. This is harmless here — lint, dev, and build all succeed because those packages ship prebuilt platform binaries and no image optimization is exercised. No `pnpm approve-builds` needed.
- Vite prints deprecation warnings about `esbuild`/`optimizeDeps.esbuildOptions` (from the React plugin under Astro 7's Rolldown-based Vite). These are warnings only and do not affect the build.
