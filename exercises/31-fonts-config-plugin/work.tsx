import { useFonts } from "expo-font";
import { Text, View } from "react-native";

export function App() {
	const [fontsLoaded] = useFonts({
		"Geist-Bold": require("./assets/fonts/Geist-Bold.otf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View>
			<Text style={{ fontFamily: "Geist-Bold" }}>Hello</Text>
		</View>
	);
}
