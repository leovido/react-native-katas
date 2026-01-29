import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("list-performance-item-memo rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not pass user={item} or user={user} to UserRow", () => {
		expect(source).not.toMatch(/UserRow[^>]*user\s*=\s*\{/);
	});

	it("must pass primitive props (id, name, email) to UserRow", () => {
		expect(source).toMatch(/\bname\s*=\s*\{/);
	});
});
