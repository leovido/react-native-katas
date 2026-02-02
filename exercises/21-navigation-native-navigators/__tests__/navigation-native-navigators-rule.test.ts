import { readTestFile } from "../../test-utils";

describe("navigation-native-navigators rule", () => {
	const source = readTestFile(__dirname);

	it("must not use createStackNavigator from @react-navigation/stack", () => {
		expect(source).not.toMatch(/createStackNavigator|@react-navigation\/stack/);
	});

	it("must use native stack (createNativeStackNavigator or expo-router Stack)", () => {
		const hasNativeStack = /createNativeStackNavigator|@react-navigation\/native-stack/.test(
			source,
		);
		expect(hasNativeStack).toBe(true);
	});
});
