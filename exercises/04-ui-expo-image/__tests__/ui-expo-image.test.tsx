import { render, screen } from "@testing-library/react-native";
import { Avatar } from "../solution";

jest.mock("expo-image", () => ({
	Image: ({ source, testID }: { source: { uri: string }; testID?: string }) => {
		const React = require("react");
		const id = testID ?? "expo-image";
		return React.createElement("img", {
			testID: id,
			"data-testid": id,
			"data-uri": source?.uri,
		});
	},
}));

describe("Avatar (ui-expo-image)", () => {
	it("renders with url", () => {
		render(<Avatar url="https://example.com/avatar.png" />);
		expect(screen.getByTestId("expo-image")).toBeTruthy();
	});
});
