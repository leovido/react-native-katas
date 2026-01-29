import { FlashList } from "@shopify/flash-list";
import { Text, View } from "react-native";

type Item = {
	id: string;
	text?: string;
	imageUrl?: string;
	isHeader?: boolean;
};

function ListItem({ item }: { item: Item }) {
	if (item.isHeader) {
		return (
			<View>
				<Text>{item.text}</Text>
			</View>
		);
	}
	if (item.imageUrl) {
		return (
			<View>
				<Text>{item.imageUrl}</Text>
			</View>
		);
	}
	return (
		<View>
			<Text>{item.text}</Text>
		</View>
	);
}

type FeedProps = {
	items: Item[];
};

export function Feed({ items }: FeedProps) {
	return (
		<FlashList
			data={items}
			renderItem={({ item }) => <ListItem item={item} />}
			keyExtractor={(item) => item.id}
			estimatedItemSize={48}
		/>
	);
}
