import { useRouter } from "expo-router";
import { Button, View } from "react-native";

type SaveButtonProps = {
	onSave: () => void;
};

export function SaveButton(props: SaveButtonProps) {
	const router = useRouter();

	const handlePress = () => {
		props.onSave();
		router.push("/success");
	};

	return (
		<View>
			<Button onPress={handlePress} title="Save" />
		</View>
	);
}
