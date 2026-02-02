import { render, screen } from "@testing-library/react-native";
import { Card } from "../solution";

describe("Card (ui-styling)", () => {
	it("renders title and subtitle", () => {
		render(<Card />);
		const root = screen.getByTestId("rn-view");
		expect(root).toHaveTextContent(/Title/);
		expect(root).toHaveTextContent(/Subtitle/);
	});
});
