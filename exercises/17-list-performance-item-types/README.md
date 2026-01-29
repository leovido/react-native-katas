# List-Performance-Item-Types Exercise

## Rule

For **heterogeneous lists** (different item layouts: headers, messages, images), use a **type field** on each item and **getItemType** on the list so items are recycled by type. See [list-performance-item-types rule](../../.agents/skills/vercel-react-native-skills/rules/list-performance-item-types.md).

- **Forbidden:** Single list item component that branches on item shape (e.g. if isHeader, if imageUrl) without getItemType.
- **Required:** Typed items (e.g. `type: 'header' | 'message' | 'image'`), getItemType, and renderItem that switches on item.type.

## Problem

`work.tsx` uses a single `ListItem` that checks `item.isHeader` and `item.imageUrl`. Refactor to use typed items with a `type` field, getItemType, and separate components per type in renderItem.

## How to run

1. **Run tests:** `pnpm test:exercise:list-performance-item-types` or `pnpm test exercises/17-list-performance-item-types`
2. **Edit `work.tsx`** to add item types, getItemType, and switch in renderItem.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:list-performance-item-types:reset
```
