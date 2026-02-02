import { render, screen } from "@testing-library/react-native";
import { Profile } from "../solution";

describe("Profile (rendering-no-falsy-and)", () => {
	it("renders name and count when provided", () => {
		render(<Profile name="Alice" count={5} />);
		expect(screen.getByTestId("rn-view")).toHaveTextContent(/Alice/);
		expect(screen.getByTestId("rn-view")).toHaveTextContent(/5 items/);
	});
});
