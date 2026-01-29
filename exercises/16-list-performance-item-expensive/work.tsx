import { useContext, useMemo } from "react";
import { Text, View } from "react-native";

declare const ThemeContext: React.Context<{ color: string }>;
declare const UserContext: React.Context<{ name: string }>;
declare function useQuery<T>(opts: {
	queryKey: unknown[];
	queryFn: () => Promise<T>;
}): { data: T | undefined };
declare function fetchProduct(
	id: string,
): Promise<{ name: string; price: number }>;

type ProductRowProps = {
	id: string;
};

export function ProductRow({ id }: ProductRowProps) {
	const { data: product } = useQuery({
		queryKey: ["product", id],
		queryFn: () => fetchProduct(id),
	});
	const theme = useContext(ThemeContext);
	const user = useContext(UserContext);
	const recommendations = useMemo(
		() => (product ? [product.name] : []),
		[product],
	);

	if (!product) return null;
	return (
		<View>
			<Text>{product.name}</Text>
			<Text>{product.price}</Text>
		</View>
	);
}
