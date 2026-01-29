import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("ui-safe-area-scroll rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use contentInsetAdjustmentBehavior on ScrollView with value automatic", () => {
		const hasContentInset =
			/contentInsetAdjustmentBehavior\s*=\s*["']automatic["']/.test(source) ||
			/contentInsetAdjustmentBehavior\s*=\s*\{\s*["']automatic["']\s*\}/.test(
				source,
			);
		expect(hasContentInset).toBe(true);
	});

	it("must not use SafeAreaView to wrap the scroll", () => {
		expect(source).not.toMatch(/\bSafeAreaView\b/);
	});

	it("must not use useSafeAreaInsets for manual safe area padding", () => {
		expect(source).not.toMatch(/\buseSafeAreaInsets\b/);
	});
});
