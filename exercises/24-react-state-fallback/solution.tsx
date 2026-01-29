import { useState } from "react";
import { Switch, View } from "react-native";

type ToggleProps = {
	defaultEnabled: boolean;
};

export function Toggle({ defaultEnabled }: ToggleProps) {
	const [_enabled, setEnabled] = useState<boolean | undefined>(undefined);
	const enabled = _enabled ?? defaultEnabled;

	return (
		<View>
			<Switch value={enabled} onValueChange={setEnabled} />
		</View>
	);
}
