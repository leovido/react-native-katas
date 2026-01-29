# Monorepo-Single-Dependency-Versions Exercise

## Rule

Use a **single version** of each dependency across the monorepo; prefer **exact versions** (no ^ or ~). See [monorepo-single-dependency-versions rule](../../.agents/skills/vercel-react-native-skills/rules/monorepo-single-dependency-versions.md).

- **Forbidden:** Version ranges (^3.0.0) that can resolve to different versions in different packages.
- **Required:** Exact version (e.g. "3.16.1"); use pnpm overrides or syncpack at root to enforce.

## Problem

`work.tsx` exports APP_PACKAGE_JSON with "react-native-reanimated": "^3.0.0". Change it to an exact version so the monorepo uses a single version.

## How to run

1. **Run tests:** `pnpm test:exercise:monorepo-single-dependency-versions` or `pnpm test exercises/30-monorepo-single-dependency-versions`
2. **Edit `work.tsx`** to use an exact version (no ^ or ~) for react-native-reanimated.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:monorepo-single-dependency-versions:reset
```
