/**
 * Monorepo rule: native dependencies must be installed in the APP package
 * so autolinking can find them. This file represents app/package.json.
 *
 * INCORRECT: app does not list react-native-reanimated (only packages/ui has it).
 */
export const APP_PACKAGE_JSON = {
	name: "app",
	dependencies: {
		react: "19.1.0",
		"react-native": "0.81.5",
	},
};
