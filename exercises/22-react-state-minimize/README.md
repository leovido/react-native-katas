# React-State-Minimize Exercise

## Rule

**Minimize state:** derive values from props/state during render instead of storing them in state and syncing with useEffect. See [react-state-minimize rule](../../.agents/skills/vercel-react-native-skills/rules/react-state-minimize.md).

- **Forbidden:** useState for values that can be computed from props (e.g. total, itemCount from items) plus useEffect to sync.
- **Required:** Compute total and itemCount during render from items.

## Problem

`work.tsx` stores total and itemCount in state and syncs them in useEffect. Refactor to derive total and itemCount from items during render and remove the state and effect.

## How to run

1. **Run tests:** `pnpm test:exercise:react-state-minimize` or `pnpm test exercises/22-react-state-minimize`
2. **Edit `work.tsx`** to derive total and itemCount during render.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:react-state-minimize:reset
```

## Resources

- [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)
