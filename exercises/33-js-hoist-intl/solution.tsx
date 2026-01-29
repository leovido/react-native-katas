import { Text, View } from "react-native";

const currencyFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

type PriceProps = {
	amount: number;
};

export function Price({ amount }: PriceProps) {
	return (
		<View>
			<Text>{currencyFormatter.format(amount)}</Text>
		</View>
	);
}
