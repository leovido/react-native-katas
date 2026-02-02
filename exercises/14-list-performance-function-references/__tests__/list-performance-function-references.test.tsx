import { render, screen } from "@testing-library/react-native";
import { Feed } from "../solution";

jest.mock("@shopify/flash-list", () => require("../../__tests__/mocks/flash-list").mockFlashList());

describe("Feed (list-performance-function-references)", () => {
	it("renders items", () => {
		render(<Feed items={[{ id: "1", title: "First" }]} />);
		expect(screen.getByTestId("flash-list")).toHaveTextContent(/First/);
	});
});
