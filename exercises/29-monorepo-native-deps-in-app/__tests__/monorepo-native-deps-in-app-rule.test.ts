import { readTestFile } from "../../test-utils";

describe("monorepo-native-deps-in-app rule", () => {
	const source = readTestFile(__dirname);

	it("must list react-native-reanimated in app dependencies", () => {
		expect(source).toMatch(/react-native-reanimated/);
	});
});
