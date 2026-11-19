# Website

Static site for the game development SOP library. It combines two things into one deployable artifact:

- every Markdown document under `docs/`, `schemas/`, `archive/`, plus the repository README, rendered as a browsable documentation site with search and section navigation;
- the Level 1 Unity training tracker, built from `docs/blueprints/training/artificial-intelligence/app` and copied to `/tracker/`.

The build runs in CI through `.github/workflows/pages.yml` and publishes to GitHub Pages.

## Commands

```powershell
cd website
npm ci
npm run build     # tests, builds the tracker, then generates _site/
npm run preview   # serves _site/ at http://127.0.0.1:4173/
npm test          # unit tests for slug and link handling
```

`npm run build` invokes `npm run build` in the tracker app. Set `SKIP_TRACKER_BUILD=1` to reuse an existing tracker `dist/` while iterating on documentation layout.

## What the generator does

- Resolves relative Markdown links and images against the repository, rewrites them to generated URLs, and keeps GitHub-style heading anchors working.
- Falls back to a unique filename match when a source link points at a file that has moved into a subfolder.
- Generates section landing pages for top-level `docs/` folders without a `README.md`.
- Writes `nav.json` and `search-index.json` for the sidebar and client-side search.
- Copies referenced images and the tracker build into `_site/`.

Unresolved link targets are reported during the build. Set `STRICT_LINKS=1` to make them fail the build.

## GitHub Pages notes

- The workflow publishes the `website/_site` artifact with `actions/deploy-pages`.
- Pages must be enabled for the repository with **Build and deployment → Source: GitHub Actions**.
- GitHub Pages on a private repository requires a paid GitHub plan. On plans that support it, the published site is still publicly reachable unless the account is on GitHub Enterprise Cloud with private Pages access control.
- If the repository or custom domain changes, set `SITE_BASE` (for example `/new-repo-name/` or `/`) so the generated `404.html` can resolve absolute links.
