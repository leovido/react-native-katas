# List-Performance-Callbacks Exercise

## Rule

**Hoist callbacks** used by list items: create a single stable callback at the list root and pass it (and item id) to items; items call the callback with their id. See [list-performance-callbacks rule](../../.agents/skills/vercel-react-native-skills/rules/list-performance-callbacks.md).

- **Forbidden:** Creating the callback inside `renderItem` (e.g. `const onPress = () => onItemPress(item.id)` inside renderItem).
- **Required:** Stable callback (e.g. `useCallback`) at list level; items receive the callback and call it with their id.

## Problem

`work.tsx` creates a new `onPress` inside `renderItem` for each item. Refactor so a single stable callback is passed and items call it with their id.

## How to run

1. **Run tests:** `pnpm test:exercise:list-performance-callbacks` or `pnpm test exercises/12-list-performance-callbacks`
2. **Edit `work.tsx`** to hoist the callback (useCallback) and pass it to ItemRow; ItemRow calls it with item.id.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:list-performance-callbacks:reset
```
