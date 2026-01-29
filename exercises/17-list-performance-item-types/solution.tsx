import { FlashList } from "@shopify/flash-list";
import { Text, View } from "react-native";

type HeaderItem = { id: string; type: "header"; title: string };
type MessageItem = { id: string; type: "message"; text: string };
type ImageItem = { id: string; type: "image"; url: string };
type FeedItem = HeaderItem | MessageItem | ImageItem;

function SectionHeader({ title }: { title: string }) {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	);
}

function MessageRow({ text }: { text: string }) {
	return (
		<View>
			<Text>{text}</Text>
		</View>
	);
}

function ImageRow({ url }: { url: string }) {
	return (
		<View>
			<Text>{url}</Text>
		</View>
	);
}

type FeedProps = {
	items: FeedItem[];
};

export function Feed({ items }: FeedProps) {
	return (
		<FlashList
			data={items}
			keyExtractor={(item) => item.id}
			getItemType={(item) => item.type}
			renderItem={({ item }) => {
				switch (item.type) {
					case "header":
						return <SectionHeader title={item.title} />;
					case "message":
						return <MessageRow text={item.text} />;
					case "image":
						return <ImageRow url={item.url} />;
				}
			}}
			estimatedItemSize={48}
		/>
	);
}
