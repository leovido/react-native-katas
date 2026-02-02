import { readTestFile } from "../../test-utils";

describe("ui-measure-views rule", () => {
	const source = readTestFile(__dirname);

	it("must not use measure() callback", () => {
		expect(source).not.toMatch(/\.measure\s*\(/);
	});

	it("must use onLayout for layout updates", () => {
		expect(source).toMatch(/onLayout/);
	});
});
