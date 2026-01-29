import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("ui-measure-views rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not use measure() callback", () => {
		expect(source).not.toMatch(/\.measure\s*\(/);
	});

	it("must use onLayout for layout updates", () => {
		expect(source).toMatch(/onLayout/);
	});
});
