import { View } from "react-native";

type GreetingProps = {
	name: string;
};

export function Greeting({ name }: GreetingProps) {
	return <View>Hello, {name}!</View>;
}
