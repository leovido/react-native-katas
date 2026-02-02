import { readTestFile } from "../../test-utils";

describe("js-hoist-intl rule", () => {
	const source = readTestFile(__dirname);

	it("must not create formatter inside component (const formatter = new Intl...)", () => {
		expect(source).not.toMatch(/function Price[\s\S]*?const formatter = new Intl/);
	});

	it("must have formatter at module scope (e.g. currencyFormatter)", () => {
		expect(source).toMatch(/currencyFormatter|const \w+Formatter = new Intl/);
	});
});
