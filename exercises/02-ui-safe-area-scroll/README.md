# UI-Safe-Area-Scroll Exercise

## Rule

Use `contentInsetAdjustmentBehavior="automatic"` on the root ScrollView instead of wrapping content in SafeAreaView or manual padding. See [ui-safe-area-scroll rule](../../.agents/skills/vercel-react-native-skills/rules/ui-safe-area-scroll.md).

- **Forbidden:** SafeAreaView wrapper around ScrollView; `useSafeAreaInsets` with manual padding (e.g. `contentContainerStyle={{ paddingTop: insets.top }}`).
- **Required:** ScrollView with `contentInsetAdjustmentBehavior="automatic"` so iOS handles safe area insets natively.

### Simply put

- **Do not use SafeAreaView.** Safe area is declared only once at the root of the app; don’t wrap every screen’s ScrollView in it.
- **No extra logic for padding inside the scroll view.** `contentInsetAdjustmentBehavior` handles insets natively when the system changes (Dynamic Island, keyboard, etc.).
- **No need for `useSafeAreaInsets`.** `contentInsetAdjustmentBehavior` does it automatically. If you want padding, add it to the parent or to the children of the ScrollView.

## Problem

`work.tsx` currently uses a SafeAreaView wrapper around ScrollView. Fix it so that the root ScrollView uses native content inset adjustment instead.

## How to run

1. **Run tests (current work file):**  
   From the repo root:
   ```bash
   pnpm test:exercise:ui-safe-area-scroll
   ```
   Or:
   ```bash
   pnpm test exercises/02-ui-safe-area-scroll
   ```
   With the initial `work.tsx` (same as `problem.tsx`), tests **fail**.

2. **Edit `work.tsx`** so that the root ScrollView has `contentInsetAdjustmentBehavior="automatic"` and you remove the SafeAreaView wrapper (and any manual safe area padding).

3. **Run tests again.** When your implementation matches the rule, tests **pass**.

4. **Compare with `solution.tsx`** for a reference implementation.

## Reset (optional)

To reset `work.tsx` back to the problem version:

```bash
pnpm run exercise:ui-safe-area-scroll:reset
```

Then run the tests again to see them fail.
