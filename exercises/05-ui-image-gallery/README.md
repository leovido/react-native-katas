# UI-Image-Gallery Exercise

## Rule

Use **Galeria** (`@nandorojo/galeria`) for image galleries with lightbox (tap to fullscreen), with native shared element transitions, pinch-to-zoom, and pan-to-close. See [ui-image-gallery rule](../../.agents/skills/vercel-react-native-skills/rules/ui-image-gallery.md).

- **Forbidden:** Custom `Modal` + `useState` for lightbox; mapping thumbnails without Galeria.
- **Required:** `Galeria` and `Galeria.Image` from `@nandorojo/galeria` (use with `expo-image` or any image component).

## Problem

`work.tsx` uses a custom Modal and useState for the lightbox. Refactor it to use Galeria so thumbnails open in a native-feeling lightbox.

## How to run

1. **Run tests:** `pnpm test:exercise:ui-image-gallery` or `pnpm test exercises/05-ui-image-gallery`
2. **Edit `work.tsx`** to use `Galeria` and `Galeria.Image` instead of Modal + selected state.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:ui-image-gallery:reset
```

## Resources

- [Galeria](https://github.com/nandorojo/galeria)
