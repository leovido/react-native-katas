# Js-Hoist-Intl Exercise

## Rule

**Hoist Intl formatter creation** to module scope (or useMemo with deps); don't create `Intl.NumberFormat` (or DateTimeFormat, RelativeTimeFormat) inside render or loops. See [js-hoist-intl rule](../../.agents/skills/vercel-react-native-skills/rules/js-hoist-intl.md).

- **Forbidden:** `new Intl.NumberFormat(...)` inside the component body (every render).
- **Required:** Formatter at module scope (or useMemo when locale/options are dynamic).

## Problem

`work.tsx` creates `new Intl.NumberFormat(...)` inside the Price component. Move the formatter to module scope so it's not recreated every render.

## How to run

1. **Run tests:** `pnpm test:exercise:js-hoist-intl` or `pnpm test exercises/33-js-hoist-intl`
2. **Edit `work.tsx`** to define the formatter at module scope and use it in the component.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:js-hoist-intl:reset
```
