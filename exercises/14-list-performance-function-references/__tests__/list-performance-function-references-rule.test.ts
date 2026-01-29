import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("list-performance-function-references rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use useCallback for renderItem", () => {
		expect(source).toMatch(/useCallback/);
	});

	it("must assign renderItem to a variable (not inline arrow in prop)", () => {
		// renderItem={renderItem} or renderItem={someCallback}
		expect(source).toMatch(/renderItem\s*=\s*\{\s*renderItem\s*\}/);
	});
});
