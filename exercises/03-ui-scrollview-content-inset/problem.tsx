import { ScrollView, Text, View } from "react-native";

type FeedProps = {
	headerHeight: number;
};

export function Feed({ headerHeight }: FeedProps) {
	return (
		<ScrollView contentContainerStyle={{ paddingTop: headerHeight }}>
			<View>
				<Text>Content</Text>
			</View>
		</ScrollView>
	);
}
