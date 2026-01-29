import { Text, View } from "react-native";

type Item = { id: string; price: number };

type CartProps = {
	items: Item[];
};

export function Cart({ items }: CartProps) {
	const total = items.reduce((sum, item) => sum + item.price, 0);
	const itemCount = items.length;

	return (
		<View>
			<Text>{itemCount} items</Text>
			<Text>Total: ${total}</Text>
		</View>
	);
}
