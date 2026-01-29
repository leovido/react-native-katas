import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("react-state-dispatcher rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use dispatch updater (setSize with function) in onLayout", () => {
		expect(source).toMatch(/setSize\s*\(\s*\(?\s*prev\s*\)?\s*=>/);
	});

	it("must not read size directly in onLayout callback for comparison", () => {
		expect(source).not.toMatch(/if\s*\(\s*size\?\.width\s*!==/);
	});
});
