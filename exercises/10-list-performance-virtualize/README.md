# List-Performance-Virtualize Exercise

## Rule

Use a **list virtualizer** (e.g. FlashList or LegendList) instead of ScrollView with mapped children. Virtualizers render only visible items. See [list-performance-virtualize rule](../../.agents/skills/vercel-react-native-skills/rules/list-performance-virtualize.md).

- **Forbidden:** `ScrollView` with `{items.map(...)}`.
- **Required:** FlashList (or LegendList) with `data`, `renderItem`, `keyExtractor`, and `estimatedItemSize`.

## Problem

`work.tsx` uses ScrollView and map to render items. Refactor it to use FlashList so only visible items are mounted.

## How to run

1. **Run tests:** `pnpm test:exercise:list-performance-virtualize` or `pnpm test exercises/10-list-performance-virtualize`
2. **Edit `work.tsx`** to use FlashList (from `@shopify/flash-list`) with `data`, `renderItem`, `keyExtractor`, `estimatedItemSize`.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:list-performance-virtualize:reset
```

## Resources

- [FlashList](https://shopify.github.io/flash-list/)
