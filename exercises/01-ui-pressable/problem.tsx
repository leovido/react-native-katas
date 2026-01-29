import { Pressable, StyleSheet, Text } from "react-native";

type MyButtonProps = {
	onPress: () => void;
	label: string;
};

export function MyButton({ onPress, label }: MyButtonProps) {
	return (
		<Pressable onPress={onPress} style={styles.button}>
			<Text>{label}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 5,
	},
});
