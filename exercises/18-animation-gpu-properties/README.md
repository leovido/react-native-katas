# Animation-GPU-Properties Exercise

## Rule

**Animate only transform and opacity**; avoid animating layout properties (width, height, top, left, margin, padding) which trigger layout on every frame. See [animation-gpu-properties rule](../../.agents/skills/vercel-react-native-skills/rules/animation-gpu-properties.md).

- **Forbidden:** Animating `height`, `width`, `top`, `left`, `margin`, `padding` in useAnimatedStyle.
- **Required:** Use `transform` (scale, translate) and `opacity` for animations.

## Problem

`work.tsx` animates `height` in useAnimatedStyle. Refactor to use transform (e.g. scaleY) and opacity instead so the animation runs on the GPU.

## How to run

1. **Run tests:** `pnpm test:exercise:animation-gpu-properties` or `pnpm test exercises/18-animation-gpu-properties`
2. **Edit `work.tsx`** to animate transform and opacity instead of height.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:animation-gpu-properties:reset
```

## Resources

- [Reanimated transforms](https://docs.swmansion.com/react-native-reanimated/)
