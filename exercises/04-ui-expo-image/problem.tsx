import { Image, StyleSheet } from "react-native";

type AvatarProps = {
	url: string;
};

export function Avatar({ url }: AvatarProps) {
	return <Image source={{ uri: url }} style={styles.avatar} />;
}

const styles = StyleSheet.create({
	avatar: {
		width: 48,
		height: 48,
		borderRadius: 24,
	},
});
