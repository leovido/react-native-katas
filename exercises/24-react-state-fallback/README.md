# React-State-Fallback Exercise

## Rule

Use **undefined as initial state** and **nullish coalescing (`??`)** to fall back to a prop (or server value). State represents user intent only; undefined means "user hasn't chosen yet." See [react-state-fallback rule](../../.agents/skills/vercel-react-native-skills/rules/react-state-fallback.md).

- **Forbidden:** `useState(defaultEnabled)` so state is synced to prop only on mount (loses reactivity when prop changes).
- **Required:** `useState<boolean | undefined>(undefined)` and `enabled = _enabled ?? defaultEnabled` so fallback is reactive.

## Problem

`work.tsx` uses `useState(defaultEnabled)`. Refactor so state is undefined initially and the displayed value is `_enabled ?? defaultEnabled` so when defaultEnabled changes, the component reflects it until the user interacts.

## How to run

1. **Run tests:** `pnpm test:exercise:react-state-fallback` or `pnpm test exercises/24-react-state-fallback`
2. **Edit `work.tsx`** to use undefined initial state and nullish coalescing for the fallback.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:react-state-fallback:reset
```
