import { View as RNView } from "react-native";

export function View({
	children,
	...props
}: { children: React.ReactNode } & React.ComponentProps<typeof RNView>) {
	return <RNView {...props}>{children}</RNView>;
}
