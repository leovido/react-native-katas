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
		transform: [{ scaleY: withTiming(expanded ? 1 : 0) }],
		opacity: withTiming(expanded ? 1 : 0),
	}));

	return (
		<Animated.View
			style={[{ height: 200, transformOrigin: "top" }, animatedStyle]}
		>
			{children}
		</Animated.View>
	);
}
