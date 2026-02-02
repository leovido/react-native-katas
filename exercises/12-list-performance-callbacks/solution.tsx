import { FlashList } from "@shopify/flash-list";
import { useCallback } from "react";
import { Pressable, Text } from "react-native";

type Item = { id: string; title: string };

type FeedProps = {
	items: Item[];
	onItemPress: (id: string) => void;
};

function ItemRow({ item, onPress }: { item: Item; onPress: (id: string) => void }) {
	return (
		<Pressable onPress={() => onPress(item.id)}>
			<Text>{item.title}</Text>
		</Pressable>
	);
}

export function Feed({ items, onItemPress }: FeedProps) {
	const handlePress = useCallback(
		(id: string) => {
			onItemPress(id);
		},
		[onItemPress],
	);

	return (
		<FlashList
			data={items}
			renderItem={({ item }) => <ItemRow item={item} onPress={handlePress} />}
			keyExtractor={(item) => item.id}
			estimatedItemSize={48}
		/>
	);
}
