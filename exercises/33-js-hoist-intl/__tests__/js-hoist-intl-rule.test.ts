import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("js-hoist-intl rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not create formatter inside component (const formatter = new Intl...)", () => {
		expect(source).not.toMatch(
			/function Price[\s\S]*?const formatter = new Intl/,
		);
	});

	it("must have formatter at module scope (e.g. currencyFormatter)", () => {
		expect(source).toMatch(/currencyFormatter|const \w+Formatter = new Intl/);
	});
});
