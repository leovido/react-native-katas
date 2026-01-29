import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("list-performance-inline-objects rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not create inline object for user prop in renderItem", () => {
		// No: user={{ id: item.id, name: item.name, ... }}
		expect(source).not.toMatch(/user\s*=\s*\{\s*\{\s*id:\s*item\./);
	});

	it("must pass item directly or primitives", () => {
		const passesItem = /UserRow\s+user\s*=\s*\{item\}/.test(source);
		const passesPrimitives = /name\s*=\s*\{item\.name\}/.test(source);
		expect(passesItem || passesPrimitives).toBe(true);
	});
});
