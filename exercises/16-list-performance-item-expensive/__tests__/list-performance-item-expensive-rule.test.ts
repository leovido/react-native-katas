import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("list-performance-item-expensive rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not use useQuery inside list item", () => {
		expect(source).not.toMatch(/\buseQuery\b/);
	});

	it("must not use useContext inside list item", () => {
		expect(source).not.toMatch(/\buseContext\b/);
	});

	it("must accept primitive props (name, price) instead of id", () => {
		expect(source).toMatch(/\bname\s*:/);
		expect(source).toMatch(/\bprice\s*:/);
	});
});
