import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

export function MyScreen() {
	const [visible, setVisible] = useState(false);

	return (
		<View style={{ flex: 1 }}>
			<Button onPress={() => setVisible(true)} title="Open" />
			<Modal
				presentationStyle="formSheet"
				animationType="slide"
				visible={visible}
				onRequestClose={() => setVisible(false)}
			>
				<View>
					<Text>Sheet content</Text>
				</View>
			</Modal>
		</View>
	);
}
