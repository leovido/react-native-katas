# React-Compiler-Reanimated-Shared-Values Exercise

## Rule

With **React Compiler**, use **`.get()` and `.set()`** on Reanimated shared values instead of reading/writing `.value` directly so the compiler can track correctly. See [react-compiler-reanimated-shared-values rule](../../.agents/skills/vercel-react-native-skills/rules/react-compiler-reanimated-shared-values.md).

- **Forbidden:** `count.value = count.value + 1` and `count.value` in JSX.
- **Required:** `count.set(count.get() + 1)` and `count.get()` for reads in JSX.

## Problem

`work.tsx` uses `count.value` for read and write. Refactor to use `count.get()` and `count.set(...)` for React Compiler compatibility.

## How to run

1. **Run tests:** `pnpm test:exercise:react-compiler-reanimated-shared-values` or `pnpm test exercises/26-react-compiler-reanimated-shared-values`
2. **Edit `work.tsx`** to use .get() and .set() instead of .value.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:react-compiler-reanimated-shared-values:reset
```

## Resources

- [Reanimated React Compiler support](https://docs.swmansion.com/react-native-reanimated/docs/core/useSharedValue/#react-compiler-support)
