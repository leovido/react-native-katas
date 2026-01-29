import { Galeria } from "@nandorojo/galeria";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type ImageGalleryProps = {
	urls: string[];
};

export function ImageGallery({ urls }: ImageGalleryProps) {
	return (
		<Galeria urls={urls}>
			{urls.map((url, index) => (
				<Galeria.Image index={index} key={url}>
					<Image source={{ uri: url }} style={styles.thumbnail} />
				</Galeria.Image>
			))}
		</Galeria>
	);
}

const styles = StyleSheet.create({
	thumbnail: { width: 100, height: 100 },
});
