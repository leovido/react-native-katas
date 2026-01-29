import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("list-performance-virtualize rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

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
