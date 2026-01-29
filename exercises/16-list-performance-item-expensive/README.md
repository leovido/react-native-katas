# List-Performance-Item-Expensive Exercise

## Rule

**Keep list items lightweight:** no data fetching (useQuery), minimal context, no expensive computation inside the item. Move fetching and heavy work to the parent; pass pre-computed primitives as props. See [list-performance-item-expensive rule](../../.agents/skills/vercel-react-native-skills/rules/list-performance-item-expensive.md).

- **Forbidden:** useQuery, multiple useContext, useMemo for heavy computation inside a list item component.
- **Required:** List item receives primitives (e.g. name, price); parent does fetching and passes data down.

## Problem

`work.tsx` uses useQuery, useContext, and useMemo inside `ProductRow` (a list item). Refactor so `ProductRow` is lightweight: it only receives `name` and `price` as props; remove queries and context from the item.

## How to run

1. **Run tests:** `pnpm test:exercise:list-performance-item-expensive` or `pnpm test exercises/16-list-performance-item-expensive`
2. **Edit `work.tsx`** to remove useQuery, useContext, useMemo from ProductRow and accept name/price props instead.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:list-performance-item-expensive:reset
```
