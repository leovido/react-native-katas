import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("monorepo-native-deps-in-app rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must list react-native-reanimated in app dependencies", () => {
		expect(source).toMatch(/react-native-reanimated/);
	});
});
