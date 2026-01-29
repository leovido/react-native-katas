# React-State-Dispatcher Exercise

## Rule

When the next state **depends on the current state**, use a **dispatch updater** (`setState(prev => ...)`) instead of reading the state variable in the callback to avoid stale closures. See [react-state-dispatcher rule](../../.agents/skills/vercel-react-native-skills/rules/react-state-dispatcher.md).

- **Forbidden:** Reading state (e.g. `size`) inside a callback and then calling setState with a new value (stale closure risk).
- **Required:** `setSize((prev) => { ... return newValue; })` when comparing or deriving from current state.

## Problem

`work.tsx` reads `size` in onLayout and compares before setSize. Refactor to use a dispatch updater: `setSize((prev) => ...)` so the comparison uses the latest value.

## How to run

1. **Run tests:** `pnpm test:exercise:react-state-dispatcher` or `pnpm test exercises/23-react-state-dispatcher`
2. **Edit `work.tsx`** to use setSize with a function (prev => ...).
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:react-state-dispatcher:reset
```
