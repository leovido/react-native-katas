import { fireEvent, render, screen } from "@testing-library/react-native";
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

describe("Feed (list-performance-callbacks)", () => {
	it("renders items and calls onItemPress", () => {
		const onItemPress = jest.fn();
		render(<Feed items={[{ id: "1", title: "Item 1" }]} onItemPress={onItemPress} />);
		expect(screen.getByTestId("rn-pressable")).toHaveTextContent(/Item 1/);
		fireEvent.press(screen.getByTestId("rn-pressable"));
		expect(onItemPress).toHaveBeenCalledWith("1");
	});
});
