import { fireEvent, render, screen } from "@testing-library/react-native";
import { ExternalLink } from "../ExternalLink";

jest.mock("expo-web-browser", () => ({
	openBrowserAsync: jest.fn().mockResolvedValue({ type: "dismiss" }),
}));

jest.mock("expo-router", () => ({
	Link: ({
		href,
		onPress,
		children,
		testID,
		...rest
	}: {
		href: string;
		onPress?: (e: { preventDefault: () => void }) => void;
		children: React.ReactNode;
		testID?: string;
	}) => {
		const React = require("react");
		const safeEvent = {
			preventDefault: () => {
				/* mock no-op */
			},
		};
		return React.createElement(
			"a",
			{
				...rest,
				href,
				testID: testID ?? "link",
				"data-testid": testID ?? "link",
				onPress: (e: unknown) =>
					onPress?.(
						e != null && typeof e === "object" && "preventDefault" in e
							? (e as { preventDefault: () => void })
							: safeEvent,
					),
			},
			children,
		);
	},
}));

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
