import { ScrollView, Text, View } from "react-native";

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
		<ScrollView>
			{items.map((item) => (
				<ItemCard key={item.id} item={item} />
			))}
		</ScrollView>
	);
}
