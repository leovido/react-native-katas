import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("ui-menus rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use zeego for menu (dropdown-menu or context-menu)", () => {
		const hasZeego = /zeego\/dropdown-menu|zeego\/context-menu/.test(source);
		expect(hasZeego).toBe(true);
	});

	it("must not use custom open state with absolute positioned menu", () => {
		// No pattern like: useState for open + position: 'absolute' for menu content
		const hasCustomAbsoluteMenu =
			/position\s*:\s*["']absolute["']/.test(source) &&
			/useState\s*\(\s*(true|false)/.test(source);
		expect(hasCustomAbsoluteMenu).toBe(false);
	});
});
