import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("animation-derived-value rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use useDerivedValue for derivation", () => {
		expect(source).toMatch(/\buseDerivedValue\b/);
	});

	it("must not use useAnimatedReaction for this derivation", () => {
		expect(source).not.toMatch(/\buseAnimatedReaction\b/);
	});
});
