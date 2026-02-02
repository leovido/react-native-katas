import { render, screen } from "@testing-library/react-native";
import { MonoText } from "../StyledText";

describe("MonoText (StyledText)", () => {
	it("renders children text", () => {
		render(<MonoText testID="mono">Snapshot test!</MonoText>);
		expect(screen.getByTestId("mono")).toHaveTextContent("Snapshot test!");
	});

	it("renders with custom testID", () => {
		render(<MonoText testID="mono-label">Label</MonoText>);
		expect(screen.getByTestId("mono-label")).toHaveTextContent("Label");
	});

	it("forwards style and other props", () => {
		render(
			<MonoText testID="styled" style={{ opacity: 0.5 }}>
				Styled
			</MonoText>,
		);
		expect(screen.getByTestId("styled")).toHaveTextContent("Styled");
	});
});
