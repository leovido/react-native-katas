import { render, screen } from "@testing-library/react-native";
import { Profile } from "../solution";

describe("Profile (imports-design-system-folder)", () => {
	it("renders", () => {
		render(<Profile />);
		expect(screen.getByTestId("rn-view")).toHaveTextContent(/Hello/);
	});
});
