# React-Compiler-Destructure-Functions Exercise

## Rule

**Destructure functions** from hooks and props at the top of render so React Compiler can key on stable references. Don't dot into objects (e.g. `router.push`, `props.onSave`) inside callbacks. See [react-compiler-destructure-functions rule](../../.agents/skills/vercel-react-native-skills/rules/react-compiler-destructure-functions.md).

- **Forbidden:** `props.onSave()`, `router.push()` (dotting into objects in callbacks).
- **Required:** Destructure `{ onSave }` from props and `{ push }` from useRouter(); use `onSave()` and `push()` in the callback.

## Problem

`work.tsx` uses `props.onSave()` and `router.push()` inside handlePress. Refactor to destructure onSave and push at the top of the component and use them in the callback.

## How to run

1. **Run tests:** `pnpm test:exercise:react-compiler-destructure-functions` or `pnpm test exercises/25-react-compiler-destructure-functions`
2. **Edit `work.tsx`** to destructure onSave from props and push from useRouter(), then use them in handlePress.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:react-compiler-destructure-functions:reset
```
