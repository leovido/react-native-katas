import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export function MyMenu() {
	const [open, setOpen] = useState(false);

	return (
		<View>
			<Pressable onPress={() => setOpen(!open)}>
				<Text>Open Menu</Text>
			</Pressable>
			{open && (
				<View style={{ position: "absolute", top: 40 }}>
					<Pressable onPress={() => console.log("edit")}>
						<Text>Edit</Text>
					</Pressable>
					<Pressable onPress={() => console.log("delete")}>
						<Text>Delete</Text>
					</Pressable>
				</View>
			)}
		</View>
	);
}
