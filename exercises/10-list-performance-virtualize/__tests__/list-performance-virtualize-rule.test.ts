import { readTestFile } from "../../test-utils";

describe("list-performance-virtualize rule", () => {
	const source = readTestFile(__dirname);

	it("must not use ScrollView with items.map for list", () => {
		expect(source).not.toMatch(/<ScrollView[\s\S]*?\{[^}]*\.map\s*\(/);
	});

	it("must use a virtualized list (FlashList or LegendList)", () => {
		const hasFlashList = /FlashList|@shopify\/flash-list/.test(source);
		const hasLegendList = /LegendList|@legendapp\/list/.test(source);
		expect(hasFlashList || hasLegendList).toBe(true);
	});

	it("must use data and renderItem", () => {
		expect(source).toMatch(/\bdata\s*=/);
		expect(source).toMatch(/\brenderItem\s*=/);
	});
});
