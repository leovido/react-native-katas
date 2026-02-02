import { useRef } from "react";
import { Button, Text, View } from "react-native";

type BottomSheetRef = { expand: () => void };

declare const BottomSheet: React.ComponentType<{
	ref?: React.RefObject<BottomSheetRef | null>;
	snapPoints: string[];
	children: React.ReactNode;
}>;

export function MyScreen() {
	const sheetRef = useRef<BottomSheetRef | null>(null);

	return (
		<View style={{ flex: 1 }}>
			<Button onPress={() => sheetRef.current?.expand()} title="Open" />
			<BottomSheet ref={sheetRef} snapPoints={["50%", "90%"]}>
				<View>
					<Text>Sheet content</Text>
				</View>
			</BottomSheet>
		</View>
	);
}
