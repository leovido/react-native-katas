# List-Performance-Inline-Objects Exercise

## Rule

**Avoid inline objects** in `renderItem`: don't create new objects (or style objects) inside renderItem to pass as props; pass the item or primitives so memoization works. See [list-performance-inline-objects rule](../../.agents/skills/vercel-react-native-skills/rules/list-performance-inline-objects.md).

- **Forbidden:** `user={{ id: item.id, name: item.name, ... }}` or inline `style={{ ... }}` in renderItem.
- **Required:** Pass `item` directly or pass primitive props; use stable style references or derive inside the child.

## Problem

`work.tsx` creates a new object `{ id: item.id, name: item.name, avatar: item.avatar }` inside renderItem. Refactor to pass the item directly (or primitives) instead.

## How to run

1. **Run tests:** `pnpm test:exercise:list-performance-inline-objects` or `pnpm test exercises/13-list-performance-inline-objects`
2. **Edit `work.tsx`** to pass the item (or primitives) without creating an inline object in renderItem.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:list-performance-inline-objects:reset
```
