# UI-Pressable Exercise

## Rule

Use **Pressable** instead of legacy Touchable components. See [ui-pressable rule](../../.agents/skills/vercel-react-native-skills/rules/ui-pressable.md).

- **Forbidden:** `TouchableOpacity`, `TouchableHighlight`
- **Required:** `Pressable` from `react-native` or `react-native-gesture-handler`

## Problem

`work.tsx` currently uses a legacy Touchable component. Fix it so that it follows the rule.

## How to run

1. **Run tests (current work file):**  
   From the repo root:
   ```bash
   pnpm test:exercise:ui-pressable
   ```
   Or:
   ```bash
   pnpm test exercises/ui-pressable
   ```
   With the initial `work.tsx` (same as `problem.tsx`), tests **fail**.

2. **Edit `work.tsx`** so that it uses `Pressable` instead of `TouchableOpacity`/`TouchableHighlight`. Keep the same component API (`MyButton` with `onPress` and `label`).

3. **Run tests again.** When your implementation matches the rule, tests **pass**.

4. **Compare with `solution.tsx`** for a reference implementation.

## Reset (optional)

To reset `work.tsx` back to the problem version:

```bash
pnpm run exercise:ui-pressable:reset
```

Then run the tests again to see them fail.
