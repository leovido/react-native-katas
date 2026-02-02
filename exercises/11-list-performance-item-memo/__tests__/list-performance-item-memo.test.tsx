import { render, screen } from "@testing-library/react-native";
import { UserList } from "../solution";

describe("UserList (list-performance-item-memo)", () => {
	it("renders users", () => {
		render(
			<UserList
				users={[
					{ id: "1", name: "Alice", email: "a@b.com" },
					{ id: "2", name: "Bob", email: "b@b.com" },
				]}
			/>,
		);
		const texts = screen.getAllByTestId("rn-text");
		expect(texts.length).toBe(2);
		expect(texts[0]).toHaveTextContent(/Alice|Bob/);
	});
});
