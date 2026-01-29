import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function MyScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View>
					<Text>Content</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
