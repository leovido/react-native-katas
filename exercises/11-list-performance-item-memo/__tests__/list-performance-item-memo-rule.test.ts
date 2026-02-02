import { readTestFile } from "../../test-utils";

describe("list-performance-item-memo rule", () => {
	const source = readTestFile(__dirname);

	it("must not pass user={item} or user={user} to UserRow", () => {
		expect(source).not.toMatch(/UserRow[^>]*user\s*=\s*\{/);
	});

	it("must pass primitive props (id, name, email) to UserRow", () => {
		expect(source).toMatch(/\bname\s*=\s*\{/);
	});
});
