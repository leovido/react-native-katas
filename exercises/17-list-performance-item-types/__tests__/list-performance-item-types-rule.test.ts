import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("list-performance-item-types rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use getItemType for heterogeneous list", () => {
		expect(source).toMatch(/\bgetItemType\s*=/);
	});

	it("must switch on item type in renderItem (not single component with ifs)", () => {
		expect(source).toMatch(/switch\s*\(\s*item\.type\s*\)/);
	});
});
