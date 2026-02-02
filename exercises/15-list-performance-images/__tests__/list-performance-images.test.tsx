import { render, screen } from "@testing-library/react-native";
import { ProductItem } from "../solution";

jest.mock("expo-image", () => ({
	Image: ({ testID }: { testID?: string }) => {
		const React = require("react");
		const id = testID ?? "expo-image";
		return React.createElement("img", { testID: id, "data-testid": id });
	},
}));

describe("ProductItem (list-performance-images)", () => {
	it("renders product name", () => {
		render(
			<ProductItem
				product={{
					id: "1",
					name: "Widget",
					imageUrl: "https://example.com/img.png",
				}}
			/>,
		);
		expect(screen.getByTestId("rn-text")).toHaveTextContent("Widget");
	});
});
