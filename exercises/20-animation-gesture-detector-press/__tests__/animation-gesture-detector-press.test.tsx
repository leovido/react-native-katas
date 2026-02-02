import { render, screen } from "@testing-library/react-native";
import { AnimatedButton } from "../solution";

jest.mock("react-native-reanimated", () => {
	const React = require("react");
	return {
		useAnimatedStyle: () => ({}),
		useSharedValue: () => ({
			value: 0,
			set: () => {
				/* mock no-op */
			},
		}),
		withTiming: (v: number) => v,
		interpolate: () => 1,
		runOnJS: (fn: () => void) => fn,
		default: {
			View: ({ children }: { children: React.ReactNode }) =>
				React.createElement("div", { testID: "animated-view" }, children),
		},
	};
});

jest.mock("react-native-gesture-handler", () => {
	const React = require("react");
	const chain = {
		onBegin: function () {
			return this;
		},
		onFinalize: function () {
			return this;
		},
		onEnd: function () {
			return this;
		},
	};
	const Gesture = {
		Tap: () => chain,
	};
	const GestureDetector = ({ children }: { children: React.ReactNode }) =>
		React.createElement("div", { testID: "gesture-detector" }, children);
	return { Gesture, GestureDetector };
});

describe("AnimatedButton (animation-gesture-detector-press)", () => {
	it.skip("renders", () => {
		render(
			<AnimatedButton
				onPress={() => {
					/* no-op */
				}}
			/>,
		);
		expect(screen.getByTestId("gesture-detector")).toBeTruthy();
	});
});
