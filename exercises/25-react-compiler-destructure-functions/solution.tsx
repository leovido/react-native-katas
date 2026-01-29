import { useRouter } from "expo-router";
import { Button, View } from "react-native";

type SaveButtonProps = {
	onSave: () => void;
};

export function SaveButton({ onSave }: SaveButtonProps) {
	const { push } = useRouter();

	const handlePress = () => {
		onSave();
		push("/success");
	};

	return (
		<View>
			<Button onPress={handlePress} title="Save" />
		</View>
	);
}
