/**
 * Monorepo rule: use a single version of each dependency across packages.
 * This file represents packages/app/package.json. Use exact versions.
 */
export const APP_PACKAGE_JSON = {
	name: "app",
	dependencies: {
		"react-native-reanimated": "3.16.1",
	},
};
