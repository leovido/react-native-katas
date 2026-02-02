import { render, screen } from "@testing-library/react-native";
import { AppNavigator } from "../solution";

jest.mock("@react-navigation/native-stack", () => {
	const React = require("react");
	const Navigator = ({ children }: { children: React.ReactNode }) =>
		React.createElement("div", { testID: "stack-navigator" }, children);
	const Screen = () => null;
	return {
		createNativeStackNavigator: () => ({ Navigator, Screen }),
	};
});

describe("AppNavigator (navigation-native-navigators)", () => {
	it.skip("renders navigator", () => {
		render(<AppNavigator />);
		expect(screen.getByTestId("stack-navigator")).toBeTruthy();
	});
});
