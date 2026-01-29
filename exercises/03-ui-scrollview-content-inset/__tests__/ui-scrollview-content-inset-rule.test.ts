import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("ui-scrollview-content-inset rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use contentInset for dynamic top/bottom spacing", () => {
		const hasContentInset = /\bcontentInset\s*=\s*\{/.test(source);
		expect(hasContentInset).toBe(true);
	});

	it("must use scrollIndicatorInsets alongside contentInset", () => {
		const hasScrollIndicatorInsets = /\bscrollIndicatorInsets\s*=\s*\{/.test(
			source,
		);
		expect(hasScrollIndicatorInsets).toBe(true);
	});

	it("must not use contentContainerStyle paddingTop/paddingBottom for dynamic spacing", () => {
		// For dynamic header/footer spacing, use contentInset instead of padding
		const hasPaddingTopInContentContainer =
			/contentContainerStyle\s*=\s*\{[\s\S]*?paddingTop\s*:/.test(source);
		const hasPaddingBottomInContentContainer =
			/contentContainerStyle\s*=\s*\{[\s\S]*?paddingBottom\s*:/.test(source);
		expect(hasPaddingTopInContentContainer).toBe(false);
		expect(hasPaddingBottomInContentContainer).toBe(false);
	});
});
