import { render, screen } from "@testing-library/react-native";
import { Text, useThemeColor, View } from "../Themed";

const mockUseColorScheme = jest.fn();
jest.mock("../useColorScheme", () => ({
	useColorScheme: () => mockUseColorScheme(),
}));

describe("Themed", () => {
	describe("useThemeColor", () => {
		it("returns light theme color when colorScheme is light", () => {
			mockUseColorScheme.mockReturnValue("light");
			const TestComponent = () => {
				const color = useThemeColor({}, "text");
				return <Text testID="text">{color}</Text>;
			};
			render(<TestComponent />);
			expect(screen.getByTestId("text")).toHaveTextContent("#000");
		});

		it("returns dark theme color when colorScheme is dark", () => {
			mockUseColorScheme.mockReturnValue("dark");
			const TestComponent = () => {
				const color = useThemeColor({}, "text");
				return <Text testID="text">{color}</Text>;
			};
			render(<TestComponent />);
			expect(screen.getByTestId("text")).toHaveTextContent("#fff");
		});

		it("returns lightColor prop when provided and colorScheme is light", () => {
			mockUseColorScheme.mockReturnValue("light");
			const TestComponent = () => {
				const color = useThemeColor({ light: "#abc" }, "text");
				return <Text testID="text">{color}</Text>;
			};
			render(<TestComponent />);
			expect(screen.getByTestId("text")).toHaveTextContent("#abc");
		});

		it("returns darkColor prop when provided and colorScheme is dark", () => {
			mockUseColorScheme.mockReturnValue("dark");
			const TestComponent = () => {
				const color = useThemeColor({ dark: "#def" }, "text");
				return <Text testID="text">{color}</Text>;
			};
			render(<TestComponent />);
			expect(screen.getByTestId("text")).toHaveTextContent("#def");
		});
	});

	describe("Text", () => {
		beforeEach(() => {
			mockUseColorScheme.mockReturnValue("light");
		});

		it("renders children", () => {
			render(<Text testID="themed-text">Hello</Text>);
			expect(screen.getByTestId("themed-text")).toHaveTextContent("Hello");
		});

		it("applies style with theme color", () => {
			const { getByTestId } = render(<Text testID="themed-text">Hello</Text>);
			const text = getByTestId("themed-text");
			expect(text.props.style).toEqual(
				expect.arrayContaining([expect.objectContaining({ color: "#000" })]),
			);
		});
	});

	describe("View", () => {
		beforeEach(() => {
			mockUseColorScheme.mockReturnValue("light");
		});

		it("renders children", () => {
			render(
				<View testID="themed-view">
					<Text testID="child-text">Child</Text>
				</View>,
			);
			expect(screen.getByTestId("child-text")).toHaveTextContent("Child");
		});

		it("applies style with theme background", () => {
			const { getByTestId } = render(
				<View testID="themed-view">
					<Text testID="child-text">Child</Text>
				</View>,
			);
			const view = getByTestId("themed-view");
			expect(view.props.style).toEqual(
				expect.arrayContaining([expect.objectContaining({ backgroundColor: "#fff" })]),
			);
		});
	});
});
