# Homepage navigation, contact, and publication-image repair

## Goal

Repair the homepage navigation targets, update the public contact email, and ensure the latest CausalRepair and DebugRepair images are served by GitHub Pages.

## Root causes

- Several navigation URLs no longer match the IDs generated from the current section headings.
- The contact email in `_config.yml` is outdated.
- The latest CausalRepair and DebugRepair images were uploaded to `_pages/images`, while the homepage requests files from the root `images` directory. CausalRepair therefore returns 404, and DebugRepair continues to serve the older root-directory image.

## Design

1. Add explicit, stable anchor spans before the Education, News, Publications, Honors and Awards, Internship Experience, and Academic Activities headings in `_pages/about.md`.
2. Point `_data/navigation.yml` at those stable IDs rather than Jekyll's emoji-dependent generated heading IDs.
3. Change the author email in `_config.yml` to `wulinhao26@stu.pku.edu.cn`.
4. Move `_pages/images/causalrepair.png` and `_pages/images/debugrepair.png` into the root `images` directory. The latter replaces the older DebugRepair image.
5. Remove the now-empty erroneous `_pages/images` directory if no files remain in it.

## Verification

- Confirm every navigation target exists explicitly in `_pages/about.md`.
- Confirm the configured email is the new Peking University address.
- Confirm every publication image referenced by `_pages/about.md` exists under its referenced path.
- Confirm the served DebugRepair image matches the latest uploaded file.
- Inspect the Git diff and ensure no unrelated files changed.
- If the local Ruby/Jekyll runtime is unavailable, document that limitation and use deterministic source checks; after a later push, verify the public URLs independently.

## Scope

No visual redesign, publication text changes, dependency upgrades, workflow changes, or remote push are included.
