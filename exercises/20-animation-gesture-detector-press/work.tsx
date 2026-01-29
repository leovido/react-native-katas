import { Pressable, Text } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

type AnimatedButtonProps = {
	onPress: () => void;
};

export function AnimatedButton({ onPress }: AnimatedButtonProps) {
	const scale = useSharedValue(1);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	return (
		<Pressable
			onPress={onPress}
			onPressIn={() => (scale.value = withTiming(0.95))}
			onPressOut={() => (scale.value = withTiming(1))}
		>
			<Animated.View style={animatedStyle}>
				<Text>Press me</Text>
			</Animated.View>
		</Pressable>
	);
}
