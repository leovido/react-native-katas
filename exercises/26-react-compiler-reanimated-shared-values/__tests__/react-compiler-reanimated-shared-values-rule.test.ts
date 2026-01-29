import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("react-compiler-reanimated-shared-values rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use .get() and .set() instead of .value for shared value", () => {
		expect(source).toMatch(/\.get\s*\(/);
		expect(source).toMatch(/\.set\s*\(/);
	});

	it("must not read or write .value directly in JS/callbacks", () => {
		expect(source).not.toMatch(/\bcount\.value\b/);
	});
});
