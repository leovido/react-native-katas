import Animated, {
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";

type CollapsiblePanelProps = {
	expanded: boolean;
	children: React.ReactNode;
};

export function CollapsiblePanel({
	expanded,
	children,
}: CollapsiblePanelProps) {
	const animatedStyle = useAnimatedStyle(() => ({
		height: withTiming(expanded ? 200 : 0),
		overflow: "hidden",
	}));

	return <Animated.View style={animatedStyle}>{children}</Animated.View>;
}
