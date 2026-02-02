import { render, screen } from "@testing-library/react-native";
import { Cart } from "../solution";

describe("Cart (react-state-minimize)", () => {
	it("renders item count and total", () => {
		render(
			<Cart
				items={[
					{ id: "1", price: 10 },
					{ id: "2", price: 20 },
				]}
			/>,
		);
		expect(screen.getByTestId("rn-view")).toHaveTextContent(/2 items/);
		expect(screen.getByTestId("rn-view")).toHaveTextContent(/\$30/);
	});
});
