import { Button as RNButton } from "react-native";

export function Button({
	children,
	title,
	...props
}: { children?: React.ReactNode; title?: string } & React.ComponentProps<typeof RNButton>) {
	return <RNButton {...props} title={title ?? (typeof children === "string" ? children : "")} />;
}
