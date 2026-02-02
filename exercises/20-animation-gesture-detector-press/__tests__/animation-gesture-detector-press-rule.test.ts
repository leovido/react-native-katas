import { readTestFile } from "../../test-utils";

describe("animation-gesture-detector-press rule", () => {
	const source = readTestFile(__dirname);

	it("must use GestureDetector and Gesture.Tap", () => {
		expect(source).toMatch(/\bGestureDetector\b/);
		expect(source).toMatch(/\bGesture\.Tap\b/);
	});

	it("must not use Pressable with onPressIn/onPressOut for animation", () => {
		expect(source).not.toMatch(/onPressIn\s*=\s*\{/);
		expect(source).not.toMatch(/onPressOut\s*=\s*\{/);
	});
});
