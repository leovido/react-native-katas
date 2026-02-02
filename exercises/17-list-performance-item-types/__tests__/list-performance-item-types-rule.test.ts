import { readTestFile } from "../../test-utils";

describe("list-performance-item-types rule", () => {
	const source = readTestFile(__dirname);

	it("must use getItemType for heterogeneous list", () => {
		expect(source).toMatch(/\bgetItemType\s*=/);
	});

	it("must switch on item type in renderItem (not single component with ifs)", () => {
		expect(source).toMatch(/switch\s*\(\s*item\.type\s*\)/);
	});
});
