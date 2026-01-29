import { Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
	interpolate,
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

type AnimatedButtonProps = {
	onPress: () => void;
};

export function AnimatedButton({ onPress }: AnimatedButtonProps) {
	const pressed = useSharedValue(0);

	const tap = Gesture.Tap()
		.onBegin(() => {
			pressed.set(withTiming(1));
		})
		.onFinalize(() => {
			pressed.set(withTiming(0));
		})
		.onEnd(() => {
			runOnJS(onPress)();
		});

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [
			{
				scale: interpolate(pressed.get(), [0, 1], [1, 0.95]),
			},
		],
	}));

	return (
		<GestureDetector gesture={tap}>
			<Animated.View style={animatedStyle}>
				<Text>Press me</Text>
			</Animated.View>
		</GestureDetector>
	);
}
