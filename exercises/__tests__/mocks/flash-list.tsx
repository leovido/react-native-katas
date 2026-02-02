import type React from "react";

const ReactLib = require("react");

type Item = { id: string; title: string };

/**
 * Shared mock for @shopify/flash-list used by list-performance exercise tests.
 */
export function mockFlashList() {
	return {
		FlashList: ({
			data,
			renderItem,
			keyExtractor,
		}: {
			data: Item[];
			renderItem: ({ item }: { item: Item }) => React.ReactNode;
			keyExtractor: (item: { id: string }) => string;
		}) =>
			ReactLib.createElement(
				"div",
				{ testID: "flash-list" },
				data.map((item) =>
					ReactLib.createElement("div", { key: keyExtractor(item) }, renderItem({ item })),
				),
			),
	};
}
