import { render, screen } from "@testing-library/react-native";
import { ProductRow } from "../solution";

describe("ProductRow (list-performance-item-expensive)", () => {
	it("renders name and price", () => {
		render(<ProductRow name="Widget" price={99} />);
		expect(screen.getByTestId("rn-view")).toHaveTextContent(/Widget/);
		expect(screen.getByTestId("rn-view")).toHaveTextContent(/99/);
	});
});
