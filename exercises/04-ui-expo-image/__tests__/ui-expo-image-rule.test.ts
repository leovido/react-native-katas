import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("ui-expo-image rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not use Image from react-native", () => {
		expect(source).not.toMatch(
			/import\s*\{[^}]*Image[^}]*\}\s*from\s*["']react-native["']/,
		);
	});

	it("must use Image from expo-image", () => {
		const hasExpoImageImport =
			/import\s*\{[^}]*Image[^}]*\}\s*from\s*["']expo-image["']/.test(source) ||
			/import\s+\*\s+as\s+.*\s+from\s*["']expo-image["']/.test(source);
		expect(hasExpoImageImport).toBe(true);
	});

	it("must render an Image component", () => {
		expect(source).toMatch(/<Image\b/);
	});
});
