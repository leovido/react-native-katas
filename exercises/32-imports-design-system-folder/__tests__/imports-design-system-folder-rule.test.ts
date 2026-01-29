import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("imports-design-system-folder rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not import View or Text directly from react-native", () => {
		expect(source).not.toMatch(/from\s*["']react-native["']/);
	});

	it("must import from design system path (e.g. @/components)", () => {
		expect(source).toMatch(/@\/components\/|@\/design-system\//);
	});
});
