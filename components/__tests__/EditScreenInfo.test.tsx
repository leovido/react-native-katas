import { render, screen } from "@testing-library/react-native";
import EditScreenInfo from "../EditScreenInfo";

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
