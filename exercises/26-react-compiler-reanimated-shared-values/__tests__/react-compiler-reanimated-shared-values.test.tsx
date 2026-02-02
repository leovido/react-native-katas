import { render, screen } from "@testing-library/react-native";
import { Counter } from "../solution";

jest.mock("react-native-reanimated", () => ({
	useSharedValue: (initial: number) => ({
		value: initial,
		get: () => initial,
		set: () => {
			/* mock no-op */
		},
	}),
}));

describe("Counter (react-compiler-reanimated-shared-values)", () => {
	it("renders count button", () => {
		render(<Counter />);
		expect(screen.getByTestId("rn-button")).toHaveTextContent(/Count:/);
	});
});
