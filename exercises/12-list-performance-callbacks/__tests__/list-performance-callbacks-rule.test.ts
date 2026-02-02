import { readTestFile } from "../../test-utils";

describe("list-performance-callbacks rule", () => {
	const source = readTestFile(__dirname);

	it("must not create callback inside renderItem", () => {
		// No: renderItem={({ item }) => { const onPress = () => ...; return ...
		expect(source).not.toMatch(/renderItem\s*=\s*\{[^}]*const\s+onPress\s*=/);
	});

	it("must use useCallback or stable callback for handler", () => {
		expect(source).toMatch(/useCallback/);
	});
});
