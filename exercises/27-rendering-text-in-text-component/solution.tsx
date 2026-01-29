import { Text, View } from "react-native";

type GreetingProps = {
	name: string;
};

export function Greeting({ name }: GreetingProps) {
	return (
		<View>
			<Text>Hello, {name}!</Text>
		</View>
	);
}
