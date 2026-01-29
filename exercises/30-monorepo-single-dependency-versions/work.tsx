/**
 * Monorepo rule: use a single version of each dependency across packages.
 * This file represents packages/app/package.json.
 *
 * INCORRECT: version range ^3.0.0 can resolve to different versions across packages.
 */
export const APP_PACKAGE_JSON = {
	name: "app",
	dependencies: {
		"react-native-reanimated": "^3.0.0",
	},
};
