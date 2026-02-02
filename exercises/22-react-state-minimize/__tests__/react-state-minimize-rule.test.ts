import { readTestFile } from "../../test-utils";

describe("react-state-minimize rule", () => {
	const source = readTestFile(__dirname);

	it("must not use useEffect to sync total/itemCount from items", () => {
		expect(source).not.toMatch(/setTotal|setItemCount/);
	});

	it("must derive total and itemCount during render", () => {
		expect(source).toMatch(/const total =/);
		expect(source).toMatch(/itemCount|items\.length/);
	});
});
