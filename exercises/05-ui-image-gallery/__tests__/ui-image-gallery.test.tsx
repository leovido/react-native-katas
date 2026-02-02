import { render, screen } from "@testing-library/react-native";
import { ImageGallery } from "../solution";

jest.mock("expo-image", () => ({
	Image: ({ testID }: { testID?: string }) => {
		const React = require("react");
		const id = testID ?? "expo-image";
		return React.createElement("img", { testID: id, "data-testid": id });
	},
}));

jest.mock("@nandorojo/galeria", () => {
	const React = require("react");
	const GaleriaRoot = ({ children }: { children: React.ReactNode }) =>
		React.createElement("div", { testID: "galeria", "data-testid": "galeria" }, children);
	const GaleriaImage = ({ children }: { children: React.ReactNode }) =>
		React.createElement("div", { testID: "galeria-image" }, children);
	GaleriaRoot.Image = GaleriaImage;
	return { Galeria: GaleriaRoot };
});

describe("ImageGallery (ui-image-gallery)", () => {
	it("renders with urls", () => {
		render(<ImageGallery urls={["https://a.com/1.jpg", "https://b.com/2.jpg"]} />);
		expect(screen.getByTestId("galeria")).toBeTruthy();
	});
});
