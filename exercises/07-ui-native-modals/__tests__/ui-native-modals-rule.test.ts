import { readTestFile } from "../../test-utils";

describe("ui-native-modals rule", () => {
	const source = readTestFile(__dirname);

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
