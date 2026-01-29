import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("list-performance-callbacks rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not create callback inside renderItem", () => {
		// No: renderItem={({ item }) => { const onPress = () => ...; return ...
		expect(source).not.toMatch(/renderItem\s*=\s*\{[^}]*const\s+onPress\s*=/);
	});

	it("must use useCallback or stable callback for handler", () => {
		expect(source).toMatch(/useCallback/);
	});
});
