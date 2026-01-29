import { Pressable, Text } from "react-native";

type MyButtonProps = {
	onPress: () => void;
	label: string;
};

export function MyButton({ onPress, label }: MyButtonProps) {
	return (
		<Pressable onPress={onPress}>
			<Text>{label}</Text>
		</Pressable>
	);
}
