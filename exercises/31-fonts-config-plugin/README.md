# Fonts-Config-Plugin Exercise

## Rule

Use the **expo-font config plugin** in app.json to embed fonts at build time instead of `useFonts` or `Font.loadAsync`. See [fonts-config-plugin rule](../../.agents/skills/vercel-react-native-skills/rules/fonts-config-plugin.md).

- **Forbidden:** useFonts() or Font.loadAsync() for loading fonts at runtime.
- **Required:** expo-font plugin in app.json with fonts array; no loading state in the component.

## Problem

`work.tsx` uses useFonts() and a loading check. Refactor so the component assumes fonts are already available (loaded via config plugin) and remove useFonts.

## How to run

1. **Run tests:** `pnpm test:exercise:fonts-config-plugin` or `pnpm test exercises/31-fonts-config-plugin`
2. **Edit `work.tsx`** to remove useFonts and the loading check (assume fonts are in app.json plugin).
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:fonts-config-plugin:reset
```

## Resources

- [Expo Font](https://docs.expo.dev/versions/latest/sdk/font/)
