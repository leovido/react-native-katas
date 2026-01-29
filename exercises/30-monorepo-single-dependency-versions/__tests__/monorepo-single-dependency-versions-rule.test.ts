import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("monorepo-single-dependency-versions rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not use version range (^ or ~) for react-native-reanimated", () => {
		expect(source).not.toMatch(/"react-native-reanimated":\s*["']\^/);
		expect(source).not.toMatch(/"react-native-reanimated":\s*["']~/);
	});
});
