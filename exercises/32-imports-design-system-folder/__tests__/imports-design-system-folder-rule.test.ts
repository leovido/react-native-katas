import { readTestFile } from "../../test-utils";

describe("imports-design-system-folder rule", () => {
	const source = readTestFile(__dirname);

	it("must not import View or Text directly from react-native", () => {
		expect(source).not.toMatch(/from\s*["']react-native["']/);
	});

	it("must import from design system path (e.g. @/components)", () => {
		expect(source).toMatch(/@\/components\/|@\/design-system\//);
	});
});
