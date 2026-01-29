import { useDerivedValue, useSharedValue } from "react-native-reanimated";

export function MyComponent() {
	const progress = useSharedValue(0);

	const opacity = useDerivedValue(() => 1 - progress.get());

	return null;
}
