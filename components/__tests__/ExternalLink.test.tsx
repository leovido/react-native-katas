import { fireEvent, render, screen } from "@testing-library/react-native";
import { ExternalLink } from "../ExternalLink";

jest.mock("expo-web-browser", () => require("./mocks/expo-web-browser").mockExpoWebBrowser());
jest.mock("expo-router", () => require("./mocks/expo-router").mockExpoRouter());

const WebBrowser = jest.requireMock("expo-web-browser") as {
	openBrowserAsync: jest.Mock;
};

describe("ExternalLink", () => {
	it("renders children", () => {
		render(
			<ExternalLink href="https://example.com" testID="ext-link">
				Example
			</ExternalLink>,
		);
		expect(screen.getByTestId("ext-link")).toHaveTextContent("Example");
	});

	it("opens URL in browser on press when not web", async () => {
		render(
			<ExternalLink href="https://example.com" testID="ext-link">
				Open
			</ExternalLink>,
		);
		fireEvent.press(screen.getByTestId("ext-link"));
		expect(WebBrowser.openBrowserAsync).toHaveBeenCalledWith("https://example.com");
	});
});
