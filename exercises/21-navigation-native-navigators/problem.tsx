import { createStackNavigator } from "@react-navigation/stack";

declare function HomeScreen(): JSX.Element;
declare function DetailsScreen(): JSX.Element;

const Stack = createStackNavigator();

export function AppNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Details" component={DetailsScreen} />
		</Stack.Navigator>
	);
}
