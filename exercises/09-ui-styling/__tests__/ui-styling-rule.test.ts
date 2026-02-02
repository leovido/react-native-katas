import { readTestFile } from "../../test-utils";

describe("ui-styling rule", () => {
	const source = readTestFile(__dirname);

	it("must use borderCurve with borderRadius", () => {
		expect(source).toMatch(/borderCurve\s*:\s*["']continuous["']/);
	});

	it("must use gap for spacing between elements (not marginBottom on children)", () => {
		expect(source).toMatch(/\bgap\s*:/);
	});

	it("must use StyleSheet.create or equivalent", () => {
		expect(source).toMatch(/StyleSheet\.create/);
	});
});
