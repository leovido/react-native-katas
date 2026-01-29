import { Text, View } from "react-native";

/**
 * Fonts are loaded via expo-font config plugin in app.json:
 * plugins: [ ["expo-font", { "fonts": ["./assets/fonts/Geist-Bold.otf"] }] ]
 * No runtime font loading—font is available at launch.
 */
export function App() {
	return (
		<View>
			<Text style={{ fontFamily: "Geist-Bold" }}>Hello</Text>
		</View>
	);
}
