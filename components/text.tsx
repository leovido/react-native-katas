import { Text as RNText } from "react-native";

export function Text({
	children,
	...props
}: { children: React.ReactNode } & React.ComponentProps<typeof RNText>) {
	return <RNText {...props}>{children}</RNText>;
}
