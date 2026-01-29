import { ScrollView, Text, View } from "react-native";

type FeedProps = {
	headerHeight: number;
};

export function Feed({ headerHeight }: FeedProps) {
	return (
		<ScrollView
			contentInset={{ top: headerHeight }}
			scrollIndicatorInsets={{ top: headerHeight }}
		>
			<View>
				<Text>Content</Text>
			</View>
		</ScrollView>
	);
}
