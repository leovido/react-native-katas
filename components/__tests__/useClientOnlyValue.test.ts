import { renderHook } from "@testing-library/react-native";
import { useClientOnlyValue } from "../useClientOnlyValue";

describe("useClientOnlyValue", () => {
	it("returns client value (web-only impl in Jest)", () => {
		const { result } = renderHook(() => useClientOnlyValue("server-value", "client-value"));
		expect(result.current).toBe("client-value");
	});

	it("returns client value for different types", () => {
		const { result } = renderHook(() => useClientOnlyValue(null as string | null, "resolved"));
		expect(result.current).toBe("resolved");
	});
});
