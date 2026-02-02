import { render, screen } from "@testing-library/react-native";
import { MeasuredView } from "../solution";

describe("MeasuredView (react-state-dispatcher)", () => {
	it("renders", () => {
		render(<MeasuredView />);
		expect(screen.getByTestId("rn-view")).toBeTruthy();
	});
});
