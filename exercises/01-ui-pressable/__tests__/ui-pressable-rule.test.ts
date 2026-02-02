import { readTestFile } from "../../test-utils";

describe("ui-pressable rule", () => {
	const source = readTestFile(__dirname);

	it("must not use TouchableOpacity", () => {
		expect(source).not.toMatch(/\bTouchableOpacity\b/);
	});

	it("must not use TouchableHighlight", () => {
		expect(source).not.toMatch(/\bTouchableHighlight\b/);
	});

	it("must use Pressable from react-native or react-native-gesture-handler", () => {
		const hasPressableInJSX = /<Pressable\b/.test(source);
		const hasPressableImport =
			/import\s*\{[^}]*Pressable[^}]*\}\s*from\s*["'](?:react-native|react-native-gesture-handler)["']/.test(
				source,
			);
		expect(hasPressableInJSX).toBe(true);
		expect(hasPressableImport).toBe(true);
	});
});
