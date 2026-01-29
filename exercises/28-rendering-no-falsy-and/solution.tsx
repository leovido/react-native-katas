import { Text, View } from "react-native";

type ProfileProps = {
	name: string;
	count: number;
};

export function Profile({ name, count }: ProfileProps) {
	return (
		<View>
			{name ? <Text>{name}</Text> : null}
			{count ? <Text>{count} items</Text> : null}
		</View>
	);
}
