# List-Performance-Images Exercise

## Rule

**Optimize images in lists:** use appropriately-sized (e.g. thumbnail) URLs and an optimized image component (e.g. expo-image). Don't load full-resolution images for small list thumbnails. See [list-performance-images rule](../../.agents/skills/vercel-react-native-skills/rules/list-performance-images.md).

- **Forbidden:** Full-resolution image URL for a small thumbnail; React Native `Image` in lists when expo-image is available.
- **Required:** Thumbnail/resize params in URL (or CDN params); use expo-image (or similar) with contentFit.

## Problem

`work.tsx` uses the raw `product.imageUrl` for a 100x100 thumbnail and React Native's Image. Refactor to request an appropriately-sized image (e.g. with query params) and use expo-image with contentFit.

## How to run

1. **Run tests:** `pnpm test:exercise:list-performance-images` or `pnpm test exercises/15-list-performance-images`
2. **Edit `work.tsx`** to use a thumbnail URL and expo-image with contentFit.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:list-performance-images:reset
```

## Resources

- [expo-image](https://docs.expo.dev/versions/latest/sdk/image/)
