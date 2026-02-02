import { render, screen } from "@testing-library/react-native";
import { Feed } from "../solution";

jest.mock("@shopify/flash-list", () => {
	const React = require("react");
	return {
		FlashList: ({
			data,
			renderItem,
			keyExtractor,
		}: {
			data: { id: string; title: string }[];
			renderItem: ({ item }: { item: { id: string; title: string } }) => React.ReactNode;
			keyExtractor: (item: { id: string }) => string;
		}) => {
			return React.createElement(
				"div",
				{ testID: "flash-list", "data-testid": "flash-list" },
				data.map((item) =>
					React.createElement(
						"div",
						{ key: keyExtractor(item), testID: "flash-list-item" },
						renderItem({ item }),
					),
				),
			);
		},
	};
});

describe("Feed (list-performance-virtualize)", () => {
	it("renders items", () => {
		render(
			<Feed
				items={[
					{ id: "1", title: "First" },
					{ id: "2", title: "Second" },
				]}
			/>,
		);
		expect(screen.getByTestId("flash-list")).toBeTruthy();
		expect(screen.getByTestId("flash-list")).toHaveTextContent(/First/);
		expect(screen.getByTestId("flash-list")).toHaveTextContent(/Second/);
	});
});
