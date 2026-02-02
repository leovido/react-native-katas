import { fireEvent, render, screen } from "@testing-library/react-native";
import { MyButton } from "../solution";

describe("MyButton (ui-pressable)", () => {
	it("renders with correct label", () => {
		render(
			<MyButton
				onPress={() => {
					/* no-op */
				}}
				label="Click me"
			/>,
		);
		expect(screen.getByTestId("rn-pressable")).toHaveTextContent("Click me");
	});

	it("calls onPress when pressed", () => {
		const onPress = jest.fn();
		render(<MyButton onPress={onPress} label="Click me" />);
		fireEvent.press(screen.getByTestId("rn-pressable"));
		expect(onPress).toHaveBeenCalledTimes(1);
	});
});
