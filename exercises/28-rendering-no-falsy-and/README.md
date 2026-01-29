# Rendering-No-Falsy-And Exercise

## Rule

Never use **`{value && <Component />}`** when `value` could be an empty string or `0`. React Native may render the falsy value as text outside `<Text>`, causing a crash. Use ternary with null or explicit boolean coercion (e.g. `!!value`). See [rendering-no-falsy-and rule](../../.agents/skills/vercel-react-native-skills/rules/rendering-no-falsy-and.md).

- **Forbidden:** `{name && <Text>{name}</Text>}` when name can be ""; `{count && ...}` when count can be 0.
- **Required:** `{name ? <Text>{name}</Text> : null}` or `{!!name && <Text>{name}</Text>}` (and equivalent for count).

## Problem

`work.tsx` uses `{name && ...}` and `{count && ...}`. When name is "" or count is 0, this can crash. Fix it using ternary with null or explicit boolean coercion.

## How to run

1. **Run tests:** `pnpm test:exercise:rendering-no-falsy-and` or `pnpm test exercises/28-rendering-no-falsy-and`
2. **Edit `work.tsx`** to avoid leaking falsy values (use ternary or !!).
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:rendering-no-falsy-and:reset
```
