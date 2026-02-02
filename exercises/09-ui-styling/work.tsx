import { StyleSheet, Text, View } from "react-native";

export function Card() {
	return (
		<View style={styles.container}>
			<Text>Title</Text>
			<Text>Subtitle</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderCurve: "continuous",
		borderRadius: 12,
		padding: 16,
		gap: 8,
	},
});
