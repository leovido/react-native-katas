import { useLayoutEffect, useRef, useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { View } from "react-native";

type MeasuredBoxProps = {
	children: React.ReactNode;
};

export function MeasuredBox({ children }: MeasuredBoxProps) {
	const ref = useRef<View>(null);
	const [_height, setHeight] = useState<number | undefined>(undefined);

	useLayoutEffect(() => {
		// onLayout will handle height measurement
	}, []);

	const onLayout = (e: LayoutChangeEvent) => {
		setHeight(e.nativeEvent.layout.height);
	};

	return (
		<View ref={ref} onLayout={onLayout}>
			{children}
		</View>
	);
}
