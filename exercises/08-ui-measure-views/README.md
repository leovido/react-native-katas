# UI-Measure-Views Exercise

## Rule

Use **onLayout** (and optionally **useLayoutEffect** with **getBoundingClientRect**) for measuring view dimensions; avoid the legacy **measure()** callback. See [ui-measure-views rule](../../.agents/skills/vercel-react-native-skills/rules/ui-measure-views.md).

- **Forbidden:** `ref.current?.measure((x, y, w, h) => ...)` for dimension updates.
- **Required:** `onLayout` on the View for updates; optionally `useLayoutEffect` + `getBoundingClientRect()` for initial sync measurement.

## Problem

`work.tsx` uses `ref.current?.measure()` in useLayoutEffect to get height. Refactor it to use `onLayout` (and optionally useLayoutEffect + getBoundingClientRect for initial size) instead.

## How to run

1. **Run tests:** `pnpm test:exercise:ui-measure-views` or `pnpm test exercises/08-ui-measure-views`
2. **Edit `work.tsx`** to use `onLayout` and remove `measure()`.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:ui-measure-views:reset
```
