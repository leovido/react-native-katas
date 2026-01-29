# Imports-Design-System-Folder Exercise

## Rule

**Import from a design system folder** (e.g. @/components) that re-exports from react-native and packages, instead of importing directly from "react-native" and @ui/button in app code. See [imports-design-system-folder rule](../../.agents/skills/vercel-react-native-skills/rules/imports-design-system-folder.md).

- **Forbidden:** Direct imports from "react-native" and third-party UI packages in screen/components.
- **Required:** Import View, Text, Button from @/components (or similar) so the design system can be changed in one place.

## Problem

`work.tsx` imports View and Text from "react-native" and Button from "@ui/button". Refactor to import from @/components/view, @/components/text, @/components/button (design system folder).

## How to run

1. **Run tests:** `pnpm test:exercise:imports-design-system-folder` or `pnpm test exercises/32-imports-design-system-folder`
2. **Edit `work.tsx`** to import from @/components (or equivalent path) instead of react-native and @ui/button.
3. **Run tests again** until they pass.
4. **Compare with `solution.tsx`**.

## Reset (optional)

```bash
pnpm run exercise:imports-design-system-folder:reset
```
