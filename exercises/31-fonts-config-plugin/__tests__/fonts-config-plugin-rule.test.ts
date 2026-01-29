import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("fonts-config-plugin rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not use useFonts for font loading", () => {
		expect(source).not.toMatch(/\buseFonts\b/);
	});

	it("must reference config plugin or not have loading state", () => {
		expect(source).not.toMatch(/fontsLoaded|!fontsLoaded/);
	});
});
