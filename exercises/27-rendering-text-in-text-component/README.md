# Rendering-Text-In-Text-Component Exercise

## Rule

Strings must be rendered inside **`<Text>`**. React Native crashes if a string is a direct child of `<View>`. See [rendering-text-in-text-component rule](../../.agents/skills/vercel-react-native-skills/rules/rendering-text-in-text-component.md).

- **Forbidden:** Strings as direct children of `<View>` (or any non-Text container).
- **Required:** Wrap all text content in `<Text>`.

## Problem

`work.tsx` renders "Hello, {name}!" as a direct child of `<View>`. Fix it so the string is wrapped in `<Text>`.

## How to run

1. **Run tests:** `pnpm test:exercise:rendering-text-in-text-component` or `pnpm test exercises/27-rendering-text-in-text-component`
2. **Edit `work.tsx`** to wrap the greeting in `<Text>`.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:rendering-text-in-text-component:reset
```
