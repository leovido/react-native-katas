import { Button, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export function Counter() {
	const count = useSharedValue(0);

	const increment = () => {
		count.set(count.get() + 1);
	};

	return (
		<View>
			<Button onPress={increment} title={`Count: ${count.get()}`} />
		</View>
	);
}
