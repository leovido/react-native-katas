import { Image, StyleSheet, Text, View } from "react-native";

type Product = { id: string; name: string; imageUrl: string };

type ProductItemProps = {
	product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
	return (
		<View>
			<Image source={{ uri: product.imageUrl }} style={styles.thumbnail} />
			<Text>{product.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	thumbnail: { width: 100, height: 100 },
});
