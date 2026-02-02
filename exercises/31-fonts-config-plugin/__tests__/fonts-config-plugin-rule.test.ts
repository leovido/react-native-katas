import { readTestFile } from "../../test-utils";

describe("fonts-config-plugin rule", () => {
	const source = readTestFile(__dirname);

	it("must not use useFonts for font loading", () => {
		expect(source).not.toMatch(/\buseFonts\b/);
	});

	it("must reference config plugin or not have loading state", () => {
		expect(source).not.toMatch(/fontsLoaded|!fontsLoaded/);
	});
});
