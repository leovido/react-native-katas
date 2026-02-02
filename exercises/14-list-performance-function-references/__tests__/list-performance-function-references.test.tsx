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

describe("Feed (list-performance-function-references)", () => {
	it("renders items", () => {
		render(<Feed items={[{ id: "1", title: "First" }]} />);
		expect(screen.getByTestId("flash-list")).toHaveTextContent(/First/);
	});
});
