import { useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { View } from "react-native";

type Size = { width: number; height: number };

export function MeasuredView() {
	const [size, setSize] = useState<Size | undefined>(undefined);

	const onLayout = (e: LayoutChangeEvent) => {
		const { width, height } = e.nativeEvent.layout;
		if (size?.width !== width || size?.height !== height) {
			setSize({ width, height });
		}
	};

	return <View onLayout={onLayout} />;
}
