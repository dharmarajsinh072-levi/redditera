## Restore “final pages” quickly

This project has multiple copies (Cursor worktrees + Desktop). If Cursor ever “merges duplicates” again, the fastest recovery is to restore from the known-good Git commit and re-copy the key files.

### Known-good baseline
- **Worktree**: `/Users/dharmarajsinh/.cursor/worktrees/REDDITERA/vrm`
- **Base commit**: `c0fc52552d3007f6fbd247091d7fb8704f10e242`

### Files that define the “final pages”
- `src/components/Homepage.jsx`
- `src/components/ExploreMentions.jsx`
- `src/components/BuildAuthority.jsx`
- `src/components/ViewAdSolutions.jsx`
- `src/styles/Homepage.css`
- `src/styles/ExploreMentions.css`
- `src/styles/BuildAuthority.css`
- `src/styles/ViewAdSolutions.css`

### Restore option A (recommended): restore the whole repo state
From inside the `vrm` folder, check out the baseline commit (or a later “final” commit if you create one):
- `git checkout c0fc52552d3007f6fbd247091d7fb8704f10e242 -- .`

### Restore option B: restore only the key files
Use `git checkout <commit> -- <path>` for each file above.

### Notes
- Fonts are intentionally **not finalized** yet.
- If you want this snapshot permanently “named”, the best practice is to create a Git tag like `final-pages-2026-01-25`.

