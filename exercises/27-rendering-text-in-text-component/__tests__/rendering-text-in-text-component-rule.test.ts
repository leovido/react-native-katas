import { readTestFile } from "../../test-utils";

describe("rendering-text-in-text-component rule", () => {
	const source = readTestFile(__dirname);

	it("must wrap string content in Text component", () => {
		// View with direct text interpolation like {name} must be inside Text
		expect(source).toMatch(/<Text[\s>]/);
	});

	it("must not have View as only parent of raw string/interpolation", () => {
		// Should not be <View>Hello, {name}!</View> - should be View with Text child
		const viewWithDirectText = /<View[^>]*>\s*Hello,\s*\{name\}!/;
		expect(source).not.toMatch(viewWithDirectText);
	});
});
