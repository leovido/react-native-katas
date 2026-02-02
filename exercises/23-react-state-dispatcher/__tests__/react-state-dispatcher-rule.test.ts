import { readTestFile } from "../../test-utils";

describe("react-state-dispatcher rule", () => {
	const source = readTestFile(__dirname);

	it("must use dispatch updater (setSize with function) in onLayout", () => {
		expect(source).toMatch(/setSize\s*\(\s*\(?\s*prev\s*\)?\s*=>/);
	});

	it("must not read size directly in onLayout callback for comparison", () => {
		expect(source).not.toMatch(/if\s*\(\s*size\?\.width\s*!==/);
	});
});
