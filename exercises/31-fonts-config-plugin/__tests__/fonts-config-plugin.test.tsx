import { render, screen } from "@testing-library/react-native";
import { App } from "../solution";

describe("App (fonts-config-plugin)", () => {
	it("renders hello text", () => {
		render(<App />);
		expect(screen.getByTestId("rn-view")).toHaveTextContent(/Hello/);
	});
});
