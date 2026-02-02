import { useCallback } from "react";
import { Pressable, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type AnimatedButtonProps = {
	onPress: () => void;
};

export function AnimatedButton({ onPress }: AnimatedButtonProps) {
	const scale = useSharedValue(1);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	const handlePressIn = useCallback(() => {
		scale.value = withTiming(0.95);
	}, [scale]);

	const handlePressOut = useCallback(() => {
		scale.value = withTiming(1);
	}, [scale]);

	return (
		<Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
			<Animated.View style={animatedStyle}>
				<Text>Press me</Text>
			</Animated.View>
		</Pressable>
	);
}
