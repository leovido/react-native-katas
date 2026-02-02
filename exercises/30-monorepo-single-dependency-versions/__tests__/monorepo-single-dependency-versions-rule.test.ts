import { readTestFile } from "../../test-utils";

describe("monorepo-single-dependency-versions rule", () => {
	const source = readTestFile(__dirname);

	it("must not use version range (^ or ~) for react-native-reanimated", () => {
		expect(source).not.toMatch(/"react-native-reanimated":\s*["']\^/);
		expect(source).not.toMatch(/"react-native-reanimated":\s*["']~/);
	});
});
