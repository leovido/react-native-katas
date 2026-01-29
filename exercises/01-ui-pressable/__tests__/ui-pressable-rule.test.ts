import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("ui-pressable rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not use TouchableOpacity", () => {
		expect(source).not.toMatch(/\bTouchableOpacity\b/);
	});

	it("must not use TouchableHighlight", () => {
		expect(source).not.toMatch(/\bTouchableHighlight\b/);
	});

	it("must use Pressable from react-native or react-native-gesture-handler", () => {
		const hasPressableInJSX = /<Pressable\b/.test(source);
		const hasPressableImport =
			/import\s*\{[^}]*Pressable[^}]*\}\s*from\s*["'](?:react-native|react-native-gesture-handler)["']/.test(
				source,
			);
		expect(hasPressableInJSX).toBe(true);
		expect(hasPressableImport).toBe(true);
	});
});
