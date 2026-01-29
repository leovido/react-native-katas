# UI-Expo-Image Exercise

## Rule

Use **expo-image** instead of React Native's `Image` for memory-efficient caching, blurhash placeholders, and better performance. See [ui-expo-image rule](../../.agents/skills/vercel-react-native-skills/rules/ui-expo-image.md).

- **Forbidden:** `Image` from `react-native`
- **Required:** `Image` from `expo-image`

## Problem

`work.tsx` uses React Native's `Image`. Fix it to use `expo-image` instead while keeping the same component API (`Avatar` with `url`).

## How to run

1. **Run tests (current work file):**
   ```bash
   pnpm test:exercise:ui-expo-image
   ```
   Or: `pnpm test exercises/04-ui-expo-image`
   With the initial `work.tsx` (same as `problem.tsx`), tests **fail**.

2. **Edit `work.tsx`** to use `Image` from `expo-image` instead of `react-native`.

3. **Run tests again.** When your implementation matches the rule, tests **pass**.

4. **Compare with `solution.tsx`** for a reference implementation.

## Reset (optional)

```bash
pnpm run exercise:ui-expo-image:reset
```

## Resources

- [expo-image docs](https://docs.expo.dev/versions/latest/sdk/image/)
