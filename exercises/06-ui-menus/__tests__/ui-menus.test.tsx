import { render, screen } from "@testing-library/react-native";
import { MyMenu } from "../solution";

jest.mock("zeego/dropdown-menu", () => {
	const React = require("react");
	const Root = ({ children }: { children: React.ReactNode }) =>
		React.createElement("div", { testID: "menu-root" }, children);
	const Trigger = ({ children }: { children: React.ReactNode }) =>
		React.createElement("div", { testID: "menu-trigger" }, children);
	const Content = ({ children }: { children: React.ReactNode }) =>
		React.createElement("div", { testID: "menu-content" }, children);
	const Item = ({ children }: { children: React.ReactNode }) =>
		React.createElement("div", { testID: "menu-item" }, children);
	const ItemTitle = ({ children }: { children: React.ReactNode }) =>
		React.createElement("span", null, children);
	return { Root, Trigger, Content, Item, ItemTitle };
});

describe("MyMenu (ui-menus)", () => {
	it("renders menu trigger", () => {
		render(<MyMenu />);
		expect(screen.getByTestId("menu-root")).toBeTruthy();
		expect(screen.getByTestId("rn-pressable")).toHaveTextContent("Open Menu");
	});
});
