import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("navigation-native-navigators rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

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
