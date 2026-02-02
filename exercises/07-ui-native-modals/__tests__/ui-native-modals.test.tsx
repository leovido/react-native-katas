import { fireEvent, render, screen } from "@testing-library/react-native";
import { MyScreen } from "../solution";

describe("MyScreen (ui-native-modals)", () => {
	it("opens modal when button pressed", () => {
		render(<MyScreen />);
		expect(screen.queryByTestId("rn-modal")).toBeNull();
		fireEvent.press(screen.getByTestId("rn-button"));
		expect(screen.getByTestId("rn-modal")).toHaveTextContent("Sheet content");
	});
});
