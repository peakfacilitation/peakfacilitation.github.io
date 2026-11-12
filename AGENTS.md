# Agent Instructions

Use local Beads with embedded Dolt for issue tracking. This repository is public.

For a fresh clone, initialize a local database first.

```bash
mise exec github:gastownhall/beads@1.3.4 -- bd init --stealth --skip-agents --skip-hooks
mise exec github:gastownhall/beads@1.3.4 -- bd config set no-push true
```

Load the workflow when starting a session.

```bash
mise exec github:gastownhall/beads@1.3.4 -- bd prime
```

Use the same Beads version for `ready`, `show`, `update --claim`, and `close`.
Keep `.beads/` and its backups out of Git.
Keep the public GitHub repository out of the Beads remotes.

## Landing changes

Run the relevant checks, update local issue status, and verify the files staged
for commit. Build the site with `npm run build` and include the intended changes
under `docs/`. GitHub Pages publishes `master:/docs`.

Honor any review or publishing hold. When publishing is authorized, pull with
rebase, push the reviewed commits, and verify the deployment.
