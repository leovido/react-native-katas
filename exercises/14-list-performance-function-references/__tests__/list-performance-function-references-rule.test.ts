import { readTestFile } from "../../test-utils";

describe("list-performance-function-references rule", () => {
	const source = readTestFile(__dirname);

	it("must use useCallback for renderItem", () => {
		expect(source).toMatch(/useCallback/);
	});

	it("must assign renderItem to a variable (not inline arrow in prop)", () => {
		// renderItem={renderItem} or renderItem={someCallback}
		expect(source).toMatch(/renderItem\s*=\s*\{\s*renderItem\s*\}/);
	});
});
