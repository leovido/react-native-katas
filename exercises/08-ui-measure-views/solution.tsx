import { useLayoutEffect, useRef, useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { View } from "react-native";

type MeasuredBoxProps = {
	children: React.ReactNode;
};

export function MeasuredBox({ children }: MeasuredBoxProps) {
	const ref = useRef<View>(null);
	const [height, setHeight] = useState<number | undefined>(undefined);

	useLayoutEffect(() => {
		const rect = ref.current?.getBoundingClientRect?.();
		if (rect) setHeight(rect.height);
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
