import { readTestFile } from "../../test-utils";

describe("ui-expo-image rule", () => {
	const source = readTestFile(__dirname);

	it("must not use Image from react-native", () => {
		expect(source).not.toMatch(/import\s*\{[^}]*Image[^}]*\}\s*from\s*["']react-native["']/);
	});

	it("must use Image from expo-image", () => {
		const hasExpoImageImport =
			/import\s*\{[^}]*Image[^}]*\}\s*from\s*["']expo-image["']/.test(source) ||
			/import\s+\*\s+as\s+.*\s+from\s*["']expo-image["']/.test(source);
		expect(hasExpoImageImport).toBe(true);
	});

	it("must render an Image component", () => {
		expect(source).toMatch(/<Image\b/);
	});
});
