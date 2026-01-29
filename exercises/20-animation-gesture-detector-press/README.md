# Animation-Gesture-Detector-Press Exercise

## Rule

Use **GestureDetector** with **Gesture.Tap()** and shared values for animated press states instead of Pressable's onPressIn/onPressOut. Gesture callbacks run on the UI thread. See [animation-gesture-detector-press rule](../../.agents/skills/vercel-react-native-skills/rules/animation-gesture-detector-press.md).

- **Forbidden:** Pressable with onPressIn/onPressOut to drive Reanimated shared values.
- **Required:** GestureDetector + Gesture.Tap() with .onBegin/.onFinalize (and runOnJS for onPress).

## Problem

`work.tsx` uses Pressable with onPressIn/onPressOut to animate scale. Refactor to use GestureDetector and Gesture.Tap() so press state runs on the UI thread.

## How to run

1. **Run tests:** `pnpm test:exercise:animation-gesture-detector-press` or `pnpm test exercises/20-animation-gesture-detector-press`
2. **Edit `work.tsx`** to use GestureDetector and Gesture.Tap() with shared value for press state.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:animation-gesture-detector-press:reset
```

## Resources

- [Gesture Handler Tap Gesture](https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/tap-gesture)
