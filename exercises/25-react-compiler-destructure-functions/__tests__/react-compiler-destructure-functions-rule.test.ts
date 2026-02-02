import { readTestFile } from "../../test-utils";

describe("react-compiler-destructure-functions rule", () => {
	const source = readTestFile(__dirname);

	it("must destructure onSave from props (not props.onSave)", () => {
		expect(source).toMatch(/\{\s*onSave\s*\}\s*:\s*SaveButtonProps/);
		expect(source).not.toMatch(/props\.onSave/);
	});

	it("must destructure push from useRouter (not router.push)", () => {
		expect(source).toMatch(/\{\s*push\s*\}\s*=\s*useRouter|push\s*=\s*useRouter/);
		expect(source).not.toMatch(/router\.push/);
	});
});
