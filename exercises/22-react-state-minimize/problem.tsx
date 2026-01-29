import { useEffect, useState } from "react";
import { Text, View } from "react-native";

type Item = { id: string; price: number };

type CartProps = {
	items: Item[];
};

export function Cart({ items }: CartProps) {
	const [total, setTotal] = useState(0);
	const [itemCount, setItemCount] = useState(0);

	useEffect(() => {
		setTotal(items.reduce((sum, item) => sum + item.price, 0));
		setItemCount(items.length);
	}, [items]);

	return (
		<View>
			<Text>{itemCount} items</Text>
			<Text>Total: ${total}</Text>
		</View>
	);
}
