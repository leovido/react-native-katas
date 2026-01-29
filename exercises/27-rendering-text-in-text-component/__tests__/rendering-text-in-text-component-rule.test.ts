import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("rendering-text-in-text-component rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

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
