# UI-Styling Exercise

## Rule

Use **StyleSheet.create** (or Nativewind); use **borderCurve: 'continuous'** with **borderRadius**; use **gap** for spacing between elements instead of margin on children. See [ui-styling rule](../../.agents/skills/vercel-react-native-skills/rules/ui-styling.md).

- **Forbidden:** Inline style objects for repeated styles; borderRadius without borderCurve; margin on children for spacing between siblings.
- **Required:** StyleSheet.create (or equivalent); borderCurve with borderRadius; gap on parent for spacing.

## Problem

`work.tsx` uses inline styles, borderRadius without borderCurve, and marginBottom on children for spacing. Refactor it to use StyleSheet.create, borderCurve with borderRadius, and gap on the parent.

## How to run

1. **Run tests:** `pnpm test:exercise:ui-styling` or `pnpm test exercises/09-ui-styling`
2. **Edit `work.tsx`** to use StyleSheet.create, borderCurve with borderRadius, and gap.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:ui-styling:reset
```
