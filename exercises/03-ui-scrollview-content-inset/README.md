# UI-ScrollView-Content-Inset Exercise

## Rule

Use `contentInset` (and `scrollIndicatorInsets`) for dynamic ScrollView spacing (e.g. headers, keyboard, toolbars) instead of padding. See [ui-scrollview-content-inset rule](../../.agents/skills/vercel-react-native-skills/rules/ui-scrollview-content-inset.md).

- **Forbidden:** `contentContainerStyle` with `paddingTop` or `paddingBottom` for spacing that may change.
- **Required:** `contentInset` for that spacing, and `scrollIndicatorInsets` so the scroll indicator stays aligned.

Changing `contentInset` only adjusts scroll bounds; changing padding triggers full layout recalculation.

### Simply put

- **Use contentInset for headers (or any dynamic top/bottom space).** When the offset can change (header height, keyboard, toolbar), set `contentInset={{ top: … }}` / `bottom` instead of `contentContainerStyle={{ paddingTop: … }}`.
- **Always set scrollIndicatorInsets** to match `contentInset`, so the scroll bar aligns with the visible content.
- **Static spacing is fine as padding.** Only dynamic spacing should use `contentInset`.

## Problem

`work.tsx` uses `contentContainerStyle={{ paddingTop: headerHeight }}` for the header offset. Fix it to use `contentInset` and `scrollIndicatorInsets` instead.

## How to run

1. **Run tests (current work file):**  
   From the repo root:
   ```bash
   pnpm test:exercise:ui-scrollview-content-inset
   ```
   Or:
   ```bash
   pnpm test exercises/03-ui-scrollview-content-inset
   ```
   With the initial `work.tsx` (same as `problem.tsx`), tests **fail**.

2. **Edit `work.tsx`** so the header offset uses `contentInset` and `scrollIndicatorInsets` instead of `contentContainerStyle` padding.

3. **Run tests again.** When your implementation matches the rule, tests **pass**.

4. **Compare with `solution.tsx`** for a reference implementation.

## Reset (optional)

To reset `work.tsx` back to the problem version:

```bash
pnpm run exercise:ui-scrollview-content-inset:reset
```
