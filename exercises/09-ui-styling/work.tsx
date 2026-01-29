import { Text, View } from "react-native";

export function Card() {
	return (
		<View style={{ borderRadius: 12, padding: 16 }}>
			<Text style={{ marginBottom: 8 }}>Title</Text>
			<Text style={{ marginBottom: 8 }}>Subtitle</Text>
		</View>
	);
}
