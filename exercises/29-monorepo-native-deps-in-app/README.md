# Monorepo-Native-Deps-In-App Exercise

## Rule

In a **monorepo**, packages with **native code** must be installed in the **app's package.json** so autolinking can find them. See [monorepo-native-deps-in-app rule](../../.agents/skills/vercel-react-native-skills/rules/monorepo-native-deps-in-app.md).

- **Forbidden:** Having a native dependency only in a shared package (e.g. packages/ui) and not in the app package.
- **Required:** List the native dependency (e.g. react-native-reanimated) in the app's package.json as well.

## Problem

`work.tsx` exports `APP_PACKAGE_JSON` representing app/package.json; it does not include react-native-reanimated. Add react-native-reanimated to the app dependencies so autolinking works.

## How to run

1. **Run tests:** `pnpm test:exercise:monorepo-native-deps-in-app` or `pnpm test exercises/29-monorepo-native-deps-in-app`
2. **Edit `work.tsx`** to add "react-native-reanimated" to APP_PACKAGE_JSON.dependencies.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:monorepo-native-deps-in-app:reset
```
