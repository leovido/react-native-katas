# List-Performance-Item-Memo Exercise

## Rule

Pass **primitives** (strings, numbers, booleans) to list item components so `memo()` shallow comparison works. See [list-performance-item-memo rule](../../.agents/skills/vercel-react-native-skills/rules/list-performance-item-memo.md).

- **Forbidden:** Passing the whole `item` object to a memoized row when primitives suffice.
- **Required:** Pass individual primitive props (e.g. `id`, `name`, `email`) so memo can skip re-renders when values are unchanged.

## Problem

`work.tsx` passes `user={item}` to memoized `UserRow`. Refactor so `UserRow` receives primitive props (`id`, `name`, `email`) instead of the full user object.

## How to run

1. **Run tests:** `pnpm test:exercise:list-performance-item-memo` or `pnpm test exercises/11-list-performance-item-memo`
2. **Edit `work.tsx`** to pass primitives to `UserRow`.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:list-performance-item-memo:reset
```
