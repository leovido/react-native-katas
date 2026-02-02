# React Native Katas

Practice exercises (Katas) for React Native and Expo, aligned with the [Vercel React Native Skills](.agents/skills/vercel-react-native-skills/SKILL.md) Quick Reference. Each Kata has a **problem** (incorrect code), **work** (your edit target), and **solution** (reference implementation), with tests that check `work.tsx` against the rule.

## Prerequisites

- **Node.js** 22.x LTS
- **pnpm** >= 10.0.0
- **Expo SDK** 54.x

## How to run a Kata

### Interactive (recommended)

Run from the CLI and pick an exercise; tests run in **watch mode** (re-run when you save `work.tsx`):

```bash
pnpm run exercise
```

Or use the short alias:

```bash
pnpm e
```

1. Choose an exercise by number (1–33).
2. Jest starts in watch mode for that exercise.
3. Edit `work.tsx`; tests re-run automatically. Press `q` in the terminal to quit watch mode.

### Direct (one-off run)

Run tests once for the current `work.tsx`:

```bash
pnpm test exercises/NN-<exercise-name>
```

Or use the shortcut:

```bash
pnpm test:exercise:<rule-id>
```

With the initial `work.tsx` (same as `problem.tsx`), tests **fail**. Edit `exercises/NN-<exercise-name>/work.tsx` so it satisfies the rule, then run tests again. When your implementation matches the rule, tests **pass**. Compare with `solution.tsx` in the same folder for a reference implementation.

## Reset work file

To reset `work.tsx` back to the problem version:

```bash
pnpm run exercise:<rule-id>:reset
```

## Exercise index

| # | Rule ID | Description |
|---|---------|-------------|
| 01 | [ui-pressable](exercises/01-ui-pressable/README.md) | Use Pressable over TouchableOpacity |
| 02 | [ui-safe-area-scroll](exercises/02-ui-safe-area-scroll/README.md) | Use contentInsetAdjustmentBehavior on ScrollView |
| 03 | [ui-scrollview-content-inset](exercises/03-ui-scrollview-content-inset/README.md) | Use contentInset for dynamic ScrollView spacing |
| 04 | [ui-expo-image](exercises/04-ui-expo-image/README.md) | Use expo-image for optimized images |
| 05 | [ui-image-gallery](exercises/05-ui-image-gallery/README.md) | Use Galeria for image lightbox |
| 06 | [ui-menus](exercises/06-ui-menus/README.md) | Use native menus (zeego) for dropdowns |
| 07 | [ui-native-modals](exercises/07-ui-native-modals/README.md) | Use native Modal over JS bottom sheets |
| 08 | [ui-measure-views](exercises/08-ui-measure-views/README.md) | Use onLayout, not measure() |
| 09 | [ui-styling](exercises/09-ui-styling/README.md) | Use StyleSheet.create, gap, borderCurve |
| 10 | [list-performance-virtualize](exercises/10-list-performance-virtualize/README.md) | Use FlashList for large lists |
| 11 | [list-performance-item-memo](exercises/11-list-performance-item-memo/README.md) | Memoize list item components |
| 12 | [list-performance-callbacks](exercises/12-list-performance-callbacks/README.md) | Stabilize callback references |
| 13 | [list-performance-inline-objects](exercises/13-list-performance-inline-objects/README.md) | Avoid inline style objects in lists |
| 14 | [list-performance-function-references](exercises/14-list-performance-function-references/README.md) | Extract functions outside render |
| 15 | [list-performance-images](exercises/15-list-performance-images/README.md) | Optimize images in lists |
| 16 | [list-performance-item-expensive](exercises/16-list-performance-item-expensive/README.md) | Move expensive work outside items |
| 17 | [list-performance-item-types](exercises/17-list-performance-item-types/README.md) | Use item types for heterogeneous lists |
| 18 | [animation-gpu-properties](exercises/18-animation-gpu-properties/README.md) | Animate only transform and opacity |
| 19 | [animation-derived-value](exercises/19-animation-derived-value/README.md) | Use useDerivedValue for computed animations |
| 20 | [animation-gesture-detector-press](exercises/20-animation-gesture-detector-press/README.md) | Use Gesture.Tap instead of Pressable |
| 21 | [navigation-native-navigators](exercises/21-navigation-native-navigators/README.md) | Use native stack and native tabs |
| 22 | [react-state-minimize](exercises/22-react-state-minimize/README.md) | Minimize state subscriptions |
| 23 | [react-state-dispatcher](exercises/23-react-state-dispatcher/README.md) | Use dispatcher pattern for callbacks |
| 24 | [react-state-fallback](exercises/24-react-state-fallback/README.md) | Show fallback on first render |
| 25 | [react-compiler-destructure-functions](exercises/25-react-compiler-destructure-functions/README.md) | Destructure for React Compiler |
| 26 | [react-compiler-reanimated-shared-values](exercises/26-react-compiler-reanimated-shared-values/README.md) | Handle shared values with compiler |
| 27 | [rendering-text-in-text-component](exercises/27-rendering-text-in-text-component/README.md) | Wrap text in Text components |
| 28 | [rendering-no-falsy-and](exercises/28-rendering-no-falsy-and/README.md) | Avoid falsy && for conditional rendering |
| 29 | [monorepo-native-deps-in-app](exercises/29-monorepo-native-deps-in-app/README.md) | Keep native deps in app package |
| 30 | [monorepo-single-dependency-versions](exercises/30-monorepo-single-dependency-versions/README.md) | Single versions across packages |
| 31 | [fonts-config-plugin](exercises/31-fonts-config-plugin/README.md) | Use config plugins for custom fonts |
| 32 | [imports-design-system-folder](exercises/32-imports-design-system-folder/README.md) | Organize design system imports |
| 33 | [js-hoist-intl](exercises/33-js-hoist-intl/README.md) | Hoist Intl object creation |

Rule details: [.agents/skills/vercel-react-native-skills/rules/](.agents/skills/vercel-react-native-skills/rules/)  
Full guide: [SKILL.md](.agents/skills/vercel-react-native-skills/SKILL.md) | [AGENTS.md](.agents/skills/vercel-react-native-skills/AGENTS.md)
