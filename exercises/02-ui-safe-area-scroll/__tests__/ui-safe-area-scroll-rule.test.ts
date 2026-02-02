import { readTestFile } from "../../test-utils";

describe("ui-safe-area-scroll rule", () => {
	const source = readTestFile(__dirname);

	it("must use contentInsetAdjustmentBehavior on ScrollView with value automatic", () => {
		const hasContentInset =
			/contentInsetAdjustmentBehavior\s*=\s*["']automatic["']/.test(source) ||
			/contentInsetAdjustmentBehavior\s*=\s*\{\s*["']automatic["']\s*\}/.test(source);
		expect(hasContentInset).toBe(true);
	});

	it("must not use SafeAreaView to wrap the scroll", () => {
		expect(source).not.toMatch(/\bSafeAreaView\b/);
	});

	it("must not use useSafeAreaInsets for manual safe area padding", () => {
		expect(source).not.toMatch(/\buseSafeAreaInsets\b/);
	});
});
