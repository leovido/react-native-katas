import { fireEvent, render, screen } from "@testing-library/react-native";
import { SaveButton } from "../solution";

jest.mock("expo-router", () => ({
	useRouter: () => ({ push: jest.fn() }),
}));

describe("SaveButton (react-compiler-destructure-functions)", () => {
	it("calls onSave when pressed", () => {
		const onSave = jest.fn();
		render(<SaveButton onSave={onSave} />);
		fireEvent.press(screen.getByTestId("rn-button"));
		expect(onSave).toHaveBeenCalledTimes(1);
	});
});
