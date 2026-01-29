import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("react-compiler-destructure-functions rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must destructure onSave from props (not props.onSave)", () => {
		expect(source).toMatch(/\{\s*onSave\s*\}\s*:\s*SaveButtonProps/);
		expect(source).not.toMatch(/props\.onSave/);
	});

	it("must destructure push from useRouter (not router.push)", () => {
		expect(source).toMatch(
			/\{\s*push\s*\}\s*=\s*useRouter|push\s*=\s*useRouter/,
		);
		expect(source).not.toMatch(/router\.push/);
	});
});
