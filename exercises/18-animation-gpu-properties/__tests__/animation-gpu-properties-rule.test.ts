import { readTestFile } from "../../test-utils";

describe("animation-gpu-properties rule", () => {
	const source = readTestFile(__dirname);

	it("must not animate height (or width/top/left) in useAnimatedStyle", () => {
		expect(source).not.toMatch(/height:\s*withTiming|width:\s*withTiming/);
	});

	it("must use transform and/or opacity for animation", () => {
		expect(source).toMatch(/\btransform\s*:/);
		expect(source).toMatch(/\bopacity\s*:\s*withTiming/);
	});
});
