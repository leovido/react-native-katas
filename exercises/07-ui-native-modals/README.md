# UI-Native-Modals Exercise

## Rule

Use **native `<Modal>`** with `presentationStyle="formSheet"` (or React Navigation v7 native form sheet) instead of JS-based bottom sheet libraries. See [ui-native-modals rule](../../.agents/skills/vercel-react-native-skills/rules/ui-native-modals.md).

- **Forbidden:** JS-based bottom sheet components (e.g. custom snap points, ref-based expand).
- **Required:** React Native `Modal` with `presentationStyle="formSheet"` (or equivalent native presentation).

## Problem

`work.tsx` uses a JS-based bottom sheet with ref and snap points. Refactor it to use the native `Modal` with `presentationStyle="formSheet"`.

## How to run

1. **Run tests:** `pnpm test:exercise:ui-native-modals` or `pnpm test exercises/07-ui-native-modals`
2. **Edit `work.tsx`** to use `Modal` from `react-native` with `presentationStyle="formSheet"` and visibility state.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:ui-native-modals:reset
```
