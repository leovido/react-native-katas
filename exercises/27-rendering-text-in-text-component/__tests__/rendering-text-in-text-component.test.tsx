import { render, screen } from "@testing-library/react-native";
import { Greeting } from "../solution";

describe("Greeting (rendering-text-in-text-component)", () => {
	it("renders name in text", () => {
		render(<Greeting name="World" />);
		expect(screen.getByTestId("rn-view")).toHaveTextContent(/Hello, World!/);
	});
});
