import { useState } from "react";
import { Image, Modal, Pressable, StyleSheet } from "react-native";

type ImageGalleryProps = {
	urls: string[];
};

export function ImageGallery({ urls }: ImageGalleryProps) {
	const [selected, setSelected] = useState<string | null>(null);

	return (
		<>
			{urls.map((url) => (
				<Pressable key={url} onPress={() => setSelected(url)}>
					<Image source={{ uri: url }} style={styles.thumbnail} />
				</Pressable>
			))}
			<Modal visible={!!selected} onRequestClose={() => setSelected(null)}>
				<Image source={{ uri: selected ?? "" }} style={styles.fullscreen} />
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	thumbnail: { width: 100, height: 100 },
	fullscreen: { flex: 1 },
});
