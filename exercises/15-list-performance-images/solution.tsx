import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

type Product = { id: string; name: string; imageUrl: string };

type ProductItemProps = {
	product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
	const thumbnailUrl = `${product.imageUrl}?w=200&h=200&fit=cover`;

	return (
		<View>
			<Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} contentFit="cover" />
			<Text>{product.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	thumbnail: { width: 100, height: 100 },
});
