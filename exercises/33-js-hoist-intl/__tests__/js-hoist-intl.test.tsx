import { render, screen } from "@testing-library/react-native";
import { Price } from "../solution";

describe("Price (js-hoist-intl)", () => {
	it("formats amount as currency", () => {
		render(<Price amount={19.99} />);
		expect(screen.getByTestId("rn-view")).toHaveTextContent(/\$19\.99/);
	});
});
