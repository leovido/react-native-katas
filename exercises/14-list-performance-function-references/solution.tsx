import { FlashList } from "@shopify/flash-list";
import { useCallback } from "react";
import { Text, View } from "react-native";

type Item = { id: string; title: string };

type FeedProps = {
	items: Item[];
};

function ItemCard({ item }: { item: Item }) {
	return (
		<View>
			<Text>{item.title}</Text>
		</View>
	);
}

export function Feed({ items }: FeedProps) {
	const renderItem = useCallback(
		({ item }: { item: Item }) => <ItemCard item={item} />,
		[],
	);

	return (
		<FlashList
			data={items}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			estimatedItemSize={48}
		/>
	);
}
