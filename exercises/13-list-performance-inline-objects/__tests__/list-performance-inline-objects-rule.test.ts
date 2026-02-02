import { readTestFile } from "../../test-utils";

describe("list-performance-inline-objects rule", () => {
	const source = readTestFile(__dirname);

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
