import { render } from "@testing-library/react-native";
import { MyComponent } from "../solution";

jest.mock("react-native-reanimated", () => ({
	useDerivedValue: () => ({ value: 1 }),
	useSharedValue: () => ({ value: 0, get: () => 0 }),
}));

describe("MyComponent (animation-derived-value)", () => {
	it("renders without error", () => {
		expect(() => render(<MyComponent />)).not.toThrow();
	});
});
