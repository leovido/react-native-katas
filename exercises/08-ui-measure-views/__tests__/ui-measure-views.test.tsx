import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import { MeasuredBox } from "../solution";

describe("MeasuredBox (ui-measure-views)", () => {
	it("renders children", () => {
		render(
			<MeasuredBox>
				<Text testID="child">Child</Text>
			</MeasuredBox>,
		);
		expect(screen.getByTestId("child")).toHaveTextContent("Child");
	});
});
