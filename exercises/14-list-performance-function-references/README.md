# List-Performance-Function-References Exercise

## Rule

**Extract stable function references** for list props: don't define `renderItem` (or similar) inline so a new function is created every render; use `useCallback` or a function defined outside the component. See [list-performance-function-references rule](../../.agents/skills/vercel-react-native-skills/rules/list-performance-function-references.md).

- **Forbidden:** Inline `renderItem={({ item }) => <ItemCard item={item} />}` when the list parent re-renders often (unless React Compiler is used).
- **Required:** `renderItem` (and keyExtractor if needed) as stable reference: `useCallback` or module-level function.

## Problem

`work.tsx` passes an inline function to `renderItem`. Refactor so `renderItem` is a stable reference (e.g. `useCallback`).

## How to run

1. **Run tests:** `pnpm test:exercise:list-performance-function-references` or `pnpm test exercises/14-list-performance-function-references`
2. **Edit `work.tsx`** to use `useCallback` for `renderItem` (or extract a named function).
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:list-performance-function-references:reset
```
