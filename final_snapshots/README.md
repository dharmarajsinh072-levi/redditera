This folder is a safety net to recover “final” UI state if Cursor merges/duplicates files again.

## Current final preview
- Local preview (example): http://127.0.0.1:5174/

## What counts as “final”
- Homepage layout + interactive charts
- Service pages layout/content
- Testimonial paragraph breaks

Fonts are intentionally **not** finalized yet.

## Restore strategy (fastest)
1. Open the `vrm/` worktree (this folder) in Cursor.
2. If something gets overwritten, use your editor’s local history **or** Git history to restore files.

## Files typically involved
- `src/components/Homepage.jsx`
- `src/components/ExploreMentions.jsx`
- `src/components/BuildAuthority.jsx`
- `src/components/ViewAdSolutions.jsx`
- `src/styles/Homepage.css`
- `src/styles/ExploreMentions.css`
- `src/styles/BuildAuthority.css`
- `src/styles/ViewAdSolutions.css`

