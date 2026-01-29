import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("rendering-no-falsy-and rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not use unguarded && with potentially falsy values for name", () => {
		// {name && ...} without ternary or !! can render "" and crash
		expect(source).not.toMatch(/\{\s*name\s+&&\s+/);
	});

	it("must not use unguarded && with potentially falsy values for count", () => {
		expect(source).not.toMatch(/\{\s*count\s+&&\s+/);
	});

	it("must use ternary or explicit boolean for conditional render", () => {
		const hasTernary = /\?.*:.*null/.test(source);
		const hasDoubleBang = /!!(name|count)/.test(source);
		expect(hasTernary || hasDoubleBang).toBe(true);
	});
});
