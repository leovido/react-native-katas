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
			data: { id: string; type: string; title?: string; text?: string; url?: string }[];
			renderItem: ({ item }: { item: { id: string; type: string } }) => React.ReactNode;
			keyExtractor: (item: { id: string }) => string;
		}) =>
			React.createElement(
				"div",
				{ testID: "flash-list" },
				data.map((item) =>
					React.createElement("div", { key: keyExtractor(item) }, renderItem({ item })),
				),
			),
	};
});

describe("Feed (list-performance-item-types)", () => {
	it("renders items", () => {
		render(
			<Feed
				items={[
					{ id: "1", type: "header", title: "Section" },
					{ id: "2", type: "message", text: "Hello" },
				]}
			/>,
		);
		expect(screen.getByTestId("flash-list")).toHaveTextContent(/Section/);
	});
});
