import { render, screen } from "@testing-library/react-native";
import { UserList } from "../solution";

jest.mock("@shopify/flash-list", () => {
	const React = require("react");
	return {
		FlashList: ({
			data,
			renderItem,
			keyExtractor,
		}: {
			data: { id: string; name: string; avatar: string }[];
			renderItem: ({
				item,
			}: {
				item: { id: string; name: string; avatar: string };
			}) => React.ReactNode;
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

describe("UserList (list-performance-inline-objects)", () => {
	it("renders users", () => {
		render(<UserList users={[{ id: "1", name: "Alice", avatar: "https://a.com/1.png" }]} />);
		expect(screen.getByTestId("flash-list")).toHaveTextContent(/Alice/);
	});
});
