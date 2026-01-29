# UI-Menus Exercise

## Rule

Use **native platform menus** instead of custom JS dropdowns. Use [zeego](https://zeego.dev) for cross-platform native menus (dropdown and context menu). See [ui-menus rule](../../.agents/skills/vercel-react-native-skills/rules/ui-menus.md).

- **Forbidden:** Custom JS menu with `useState` + absolutely positioned `View`.
- **Required:** `zeego/dropdown-menu` or `zeego/context-menu` (e.g. `DropdownMenu.Root`, `Trigger`, `Content`, `Item`).

## Problem

`work.tsx` implements a custom dropdown with `useState` and an absolutely positioned view. Refactor it to use zeego's native dropdown menu.

## How to run

1. **Run tests:** `pnpm test:exercise:ui-menus` or `pnpm test exercises/06-ui-menus`
2. **Edit `work.tsx`** to use `zeego/dropdown-menu` (or context-menu) instead of the custom menu.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:ui-menus:reset
```

## Resources

- [Zeego Documentation](https://zeego.dev/components/dropdown-menu)
