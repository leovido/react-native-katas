import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("ui-native-modals rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use Modal from react-native", () => {
		expect(source).toMatch(/Modal/);
		expect(source).toMatch(/from\s*["']react-native["']/);
	});

	it("must use presentationStyle formSheet", () => {
		expect(source).toMatch(/presentationStyle\s*=\s*["']formSheet["']/);
	});

	it("must not use JS bottom sheet (snapPoints or ref expand)", () => {
		expect(source).not.toMatch(/snapPoints/);
	});
});
