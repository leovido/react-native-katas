import { fireEvent, render, screen } from "@testing-library/react-native";
import { Feed } from "../solution";

jest.mock("@shopify/flash-list", () => require("../../__tests__/mocks/flash-list").mockFlashList());

describe("Feed (list-performance-callbacks)", () => {
	it("renders items and calls onItemPress", () => {
		const onItemPress = jest.fn();
		render(<Feed items={[{ id: "1", title: "Item 1" }]} onItemPress={onItemPress} />);
		expect(screen.getByTestId("rn-pressable")).toHaveTextContent(/Item 1/);
		fireEvent.press(screen.getByTestId("rn-pressable"));
		expect(onItemPress).toHaveBeenCalledWith("1");
	});
});
