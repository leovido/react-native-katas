import { FlashList } from "@shopify/flash-list";
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
	return (
		<FlashList
			data={items}
			renderItem={({ item }) => <ItemCard item={item} />}
			keyExtractor={(item) => item.id}
			estimatedItemSize={48}
		/>
	);
}
