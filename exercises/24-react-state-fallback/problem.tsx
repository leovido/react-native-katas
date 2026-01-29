import { useState } from "react";
import { Switch, View } from "react-native";

type ToggleProps = {
	defaultEnabled: boolean;
};

export function Toggle({ defaultEnabled }: ToggleProps) {
	const [enabled, setEnabled] = useState(defaultEnabled);

	return (
		<View>
			<Switch value={enabled} onValueChange={setEnabled} />
		</View>
	);
}
