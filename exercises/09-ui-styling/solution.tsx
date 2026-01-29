import { StyleSheet, Text, View } from "react-native";

export function Card() {
	return (
		<View style={styles.card}>
			<Text>Title</Text>
			<Text>Subtitle</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 12,
		borderCurve: "continuous",
		padding: 16,
		gap: 8,
	},
});
