import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("animation-gesture-detector-press rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use GestureDetector and Gesture.Tap", () => {
		expect(source).toMatch(/\bGestureDetector\b/);
		expect(source).toMatch(/\bGesture\.Tap\b/);
	});

	it("must not use Pressable with onPressIn/onPressOut for animation", () => {
		expect(source).not.toMatch(/onPressIn\s*=\s*\{/);
		expect(source).not.toMatch(/onPressOut\s*=\s*\{/);
	});
});
