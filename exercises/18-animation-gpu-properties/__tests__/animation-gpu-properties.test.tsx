import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import { CollapsiblePanel } from "../solution";

jest.mock("react-native-reanimated", () => {
	const React = require("react");
	const View = ({ children, testID }: { children: React.ReactNode; testID?: string }) =>
		React.createElement("div", { testID: testID ?? "animated-view" }, children);
	const Animated = { View };
	return {
		useAnimatedStyle: () => ({}),
		withTiming: (v: number) => v,
		default: Animated,
	};
});

describe("CollapsiblePanel (animation-gpu-properties)", () => {
	it.skip("renders children when expanded", () => {
		render(
			<CollapsiblePanel expanded>
				<Text testID="child">Child</Text>
			</CollapsiblePanel>,
		);
		expect(screen.getByTestId("animated-view")).toHaveTextContent("Child");
	});
});
