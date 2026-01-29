import { useLayoutEffect, useRef, useState } from "react";
import { View } from "react-native";

type MeasuredBoxProps = {
	children: React.ReactNode;
};

export function MeasuredBox({ children }: MeasuredBoxProps) {
	const ref = useRef<View>(null);
	const [height, setHeight] = useState<number | undefined>(undefined);

	useLayoutEffect(() => {
		ref.current?.measure((_x, _y, _w, h) => setHeight(h));
	}, []);

	return <View ref={ref}>{children}</View>;
}
