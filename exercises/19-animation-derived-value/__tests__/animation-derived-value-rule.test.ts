import { readTestFile } from "../../test-utils";

describe("animation-derived-value rule", () => {
	const source = readTestFile(__dirname);

	it("must use useDerivedValue for derivation", () => {
		expect(source).toMatch(/\buseDerivedValue\b/);
	});

	it("must not use useAnimatedReaction for this derivation", () => {
		expect(source).not.toMatch(/\buseAnimatedReaction\b/);
	});
});
