import { renderHook } from "@testing-library/react-native";
import { useColorScheme } from "../useColorScheme";

describe("useColorScheme", () => {
	it("returns a color scheme from react-native mock", () => {
		const { result } = renderHook(() => useColorScheme());
		expect(["light", "dark", null]).toContain(result.current);
	});

	it("returns light by default from mock", () => {
		const { result } = renderHook(() => useColorScheme());
		expect(result.current).toBe("light");
	});
});
