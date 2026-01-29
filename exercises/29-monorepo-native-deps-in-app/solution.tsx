/**
 * Monorepo rule: native dependencies must be installed in the APP package
 * so autolinking can find them. This file represents app/package.json.
 *
 * CORRECT: app lists react-native-reanimated so autolinking links native code.
 */
export const APP_PACKAGE_JSON = {
	name: "app",
	dependencies: {
		react: "19.1.0",
		"react-native": "0.81.5",
		"react-native-reanimated": "3.16.1",
	},
};
