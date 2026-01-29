import { Text, View } from "react-native";

type ProductRowProps = {
	name: string;
	price: number;
};

export function ProductRow({ name, price }: ProductRowProps) {
	return (
		<View>
			<Text>{name}</Text>
			<Text>{price}</Text>
		</View>
	);
}
