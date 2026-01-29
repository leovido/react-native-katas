# Animation-Derived-Value Exercise

## Rule

Use **useDerivedValue** for deriving a shared value from another; use useAnimatedReaction only for side effects. See [animation-derived-value rule](../../.agents/skills/vercel-react-native-skills/rules/animation-derived-value.md).

- **Forbidden:** useAnimatedReaction for simple derivation (e.g. opacity = 1 - progress).
- **Required:** useDerivedValue when the result is a value you use in other worklets.

## Problem

`work.tsx` uses useAnimatedReaction to set opacity from progress. Refactor to use useDerivedValue so opacity is derived from progress declaratively.

## How to run

1. **Run tests:** `pnpm test:exercise:animation-derived-value` or `pnpm test exercises/19-animation-derived-value`
2. **Edit `work.tsx`** to use useDerivedValue instead of useAnimatedReaction.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:animation-derived-value:reset
```

## Resources

- [Reanimated useDerivedValue](https://docs.swmansion.com/react-native-reanimated/docs/core/useDerivedValue)
