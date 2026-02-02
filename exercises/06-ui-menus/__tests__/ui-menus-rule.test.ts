import { readTestFile } from "../../test-utils";

describe("ui-menus rule", () => {
	const source = readTestFile(__dirname);

	it("must use zeego for menu (dropdown-menu or context-menu)", () => {
		const hasZeego = /zeego\/dropdown-menu|zeego\/context-menu/.test(source);
		expect(hasZeego).toBe(true);
	});

	it("must not use custom open state with absolute positioned menu", () => {
		// No pattern like: useState for open + position: 'absolute' for menu content
		const hasCustomAbsoluteMenu =
			/position\s*:\s*["']absolute["']/.test(source) && /useState\s*\(\s*(true|false)/.test(source);
		expect(hasCustomAbsoluteMenu).toBe(false);
	});
});
