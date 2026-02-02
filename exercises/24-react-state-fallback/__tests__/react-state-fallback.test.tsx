import { render, screen } from "@testing-library/react-native";
import { Toggle } from "../solution";

describe("Toggle (react-state-fallback)", () => {
	it("renders with default enabled", () => {
		render(<Toggle defaultEnabled />);
		expect(screen.getByTestId("rn-switch")).toBeTruthy();
	});
});
