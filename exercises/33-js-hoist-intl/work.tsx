import { Text, View } from "react-native";

type PriceProps = {
	amount: number;
};

export function Price({ amount }: PriceProps) {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	return (
		<View>
			<Text>{formatter.format(amount)}</Text>
		</View>
	);
}
