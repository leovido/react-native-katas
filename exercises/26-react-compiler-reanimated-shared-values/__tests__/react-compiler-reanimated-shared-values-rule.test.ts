import { readTestFile } from "../../test-utils";

describe("react-compiler-reanimated-shared-values rule", () => {
	const source = readTestFile(__dirname);

	it("must use .get() and .set() instead of .value for shared value", () => {
		expect(source).toMatch(/\.get\s*\(/);
		expect(source).toMatch(/\.set\s*\(/);
	});

	it("must not read or write .value directly in JS/callbacks", () => {
		expect(source).not.toMatch(/\bcount\.value\b/);
	});
});
