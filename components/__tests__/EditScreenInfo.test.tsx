import { render, screen } from "@testing-library/react-native";
import EditScreenInfo from "../EditScreenInfo";

jest.mock("expo-web-browser", () => require("./mocks/expo-web-browser").mockExpoWebBrowser());
jest.mock("expo-router", () => require("./mocks/expo-router").mockExpoRouter());

describe("EditScreenInfo", () => {
	it("renders the given path", () => {
		render(<EditScreenInfo path="app/(tabs)/index.tsx" />);
		expect(screen.getByTestId("edit-screen-info-path")).toHaveTextContent("app/(tabs)/index.tsx");
	});

	it("renders help link with expected text", () => {
		render(<EditScreenInfo path="app/foo.tsx" />);
		const link = screen.getByTestId("link");
		expect(link).toHaveTextContent(
			"Tap here if your app doesn't automatically update after making changes",
		);
	});
});
