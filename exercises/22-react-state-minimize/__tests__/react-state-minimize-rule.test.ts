import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("react-state-minimize rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must not use useEffect to sync total/itemCount from items", () => {
		expect(source).not.toMatch(/setTotal|setItemCount/);
	});

	it("must derive total and itemCount during render", () => {
		expect(source).toMatch(/const total =/);
		expect(source).toMatch(/itemCount|items\.length/);
	});
});
