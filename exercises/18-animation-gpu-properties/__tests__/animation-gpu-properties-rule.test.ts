import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("animation-gpu-properties rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not animate height (or width/top/left) in useAnimatedStyle", () => {
		expect(source).not.toMatch(/height:\s*withTiming|width:\s*withTiming/);
	});

	it("must use transform and/or opacity for animation", () => {
		expect(source).toMatch(/\btransform\s*:/);
		expect(source).toMatch(/\bopacity\s*:\s*withTiming/);
	});
});
