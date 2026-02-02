import { render, screen } from "@testing-library/react-native";
import { Feed } from "../solution";

describe("Feed (ui-scrollview-content-inset)", () => {
	it("renders content", () => {
		render(<Feed headerHeight={100} />);
		expect(screen.getByTestId("rn-scrollview")).toHaveTextContent("Content");
	});
});
