import { FlashList } from "@shopify/flash-list";
import { Pressable, Text } from "react-native";

type Item = { id: string; title: string };

type FeedProps = {
	items: Item[];
	onItemPress: (id: string) => void;
};

function ItemRow({ item, onPress }: { item: Item; onPress: () => void }) {
	return (
		<Pressable onPress={onPress}>
			<Text>{item.title}</Text>
		</Pressable>
	);
}

export function Feed({ items, onItemPress }: FeedProps) {
	return (
		<FlashList
			data={items}
			renderItem={({ item }) => {
				const onPress = () => onItemPress(item.id);
				return <ItemRow item={item} onPress={onPress} />;
			}}
			keyExtractor={(item) => item.id}
			estimatedItemSize={48}
		/>
	);
}
