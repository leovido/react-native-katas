import { readTestFile } from "../../test-utils";

describe("react-state-fallback rule", () => {
	const source = readTestFile(__dirname);

	it("must use undefined as initial state for user-overridable value", () => {
		expect(source).toMatch(/useState\s*<\s*boolean\s*\|\s*undefined\s*>\s*\(\s*undefined\s*\)/);
	});

	it("must use nullish coalescing for fallback to prop", () => {
		expect(source).toMatch(/\?\?/);
	});
});
