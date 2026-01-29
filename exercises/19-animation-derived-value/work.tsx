import { useAnimatedReaction, useSharedValue } from "react-native-reanimated";

export function MyComponent() {
	const progress = useSharedValue(0);
	const opacity = useSharedValue(1);

	useAnimatedReaction(
		() => progress.value,
		(current) => {
			opacity.value = 1 - current;
		},
	);

	return null;
}
