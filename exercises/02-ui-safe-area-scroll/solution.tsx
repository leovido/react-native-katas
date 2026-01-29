import { ScrollView, Text, View } from "react-native";

export function MyScreen() {
	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<View>
				<Text>Content</Text>
			</View>
		</ScrollView>
	);
}
