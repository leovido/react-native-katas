import { createStackNavigator } from "@react-navigation/stack";
import type React from "react";

declare function HomeScreen(): React.JSX.Element;
declare function DetailsScreen(): React.JSX.Element;

const Stack = createStackNavigator();

export function AppNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Details" component={DetailsScreen} />
		</Stack.Navigator>
	);
}
