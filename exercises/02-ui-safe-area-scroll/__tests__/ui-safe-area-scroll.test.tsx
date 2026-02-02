import { render, screen } from "@testing-library/react-native";
import { MyScreen } from "../solution";

describe("MyScreen (ui-safe-area-scroll)", () => {
	it("renders content", () => {
		render(<MyScreen />);
		expect(screen.getByTestId("rn-scrollview")).toHaveTextContent("Content");
	});
});
