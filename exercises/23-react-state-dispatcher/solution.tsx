import { useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { View } from "react-native";

type Size = { width: number; height: number };

export function MeasuredView() {
	const [_size, setSize] = useState<Size | undefined>(undefined);

	const onLayout = (e: LayoutChangeEvent) => {
		const { width, height } = e.nativeEvent.layout;
		setSize((prev) => {
			if (prev?.width === width && prev?.height === height) return prev;
			return { width, height };
		});
	};

	return <View onLayout={onLayout} />;
}
