import type React from "react";

const ReactLib = require("react");

const safeEvent = {
	preventDefault: () => {
		/* mock no-op */
	},
};

/**
 * Shared mock Link component for expo-router used by EditScreenInfo and ExternalLink tests.
 */
export function MockLink({
	href,
	onPress,
	children,
	testID,
	...rest
}: {
	href: string;
	onPress?: (e: { preventDefault: () => void }) => void;
	children: React.ReactNode;
	testID?: string;
}) {
	return ReactLib.createElement(
		"a",
		{
			...rest,
			href,
			testID: testID ?? "link",
			"data-testid": testID ?? "link",
			onPress: (e: unknown) =>
				onPress?.(
					e != null && typeof e === "object" && "preventDefault" in e
						? (e as { preventDefault: () => void })
						: safeEvent,
				),
		},
		children,
	);
}

export const mockExpoRouter = () => ({ Link: MockLink });
