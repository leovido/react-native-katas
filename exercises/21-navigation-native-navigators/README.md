# Navigation-Native-Navigators Exercise

## Rule

Use **native navigators** instead of JS-based ones: native stack (e.g. `@react-navigation/native-stack`) and native tabs. See [navigation-native-navigators rule](../../.agents/skills/vercel-react-native-skills/rules/navigation-native-navigators.md).

- **Forbidden:** `@react-navigation/stack` (JS stack), `@react-navigation/bottom-tabs` (JS tabs).
- **Required:** `@react-navigation/native-stack` (or expo-router Stack) for stacks; native tabs for tab bars.

## Problem

`work.tsx` uses `createStackNavigator` from `@react-navigation/stack`. Refactor it to use the native stack navigator (`createNativeStackNavigator` from `@react-navigation/native-stack`).

## How to run

1. **Run tests:** `pnpm test:exercise:navigation-native-navigators` or `pnpm test exercises/21-navigation-native-navigators`
2. **Edit `work.tsx`** to use createNativeStackNavigator from @react-navigation/native-stack.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:navigation-native-navigators:reset
```

## Resources

- [React Navigation Native Stack](https://reactnavigation.org/docs/native-stack-navigator)
