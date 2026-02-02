import { readTestFile } from "../../test-utils";

describe("list-performance-item-expensive rule", () => {
	const source = readTestFile(__dirname);

	it("must not use useQuery inside list item", () => {
		expect(source).not.toMatch(/\buseQuery\b/);
	});

	it("must not use useContext inside list item", () => {
		expect(source).not.toMatch(/\buseContext\b/);
	});

	it("must accept primitive props (name, price) instead of id", () => {
		expect(source).toMatch(/\bname\s*:/);
		expect(source).toMatch(/\bprice\s*:/);
	});
});
