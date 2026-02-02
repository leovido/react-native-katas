import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("react-state-fallback rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use undefined as initial state for user-overridable value", () => {
		expect(source).toMatch(/useState\s*<\s*boolean\s*\|\s*undefined\s*>\s*\(\s*undefined\s*\)/);
	});

	it("must use nullish coalescing for fallback to prop", () => {
		expect(source).toMatch(/\?\?/);
	});
});
