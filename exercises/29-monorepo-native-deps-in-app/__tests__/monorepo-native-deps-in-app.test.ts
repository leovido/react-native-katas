import { APP_PACKAGE_JSON } from "../solution";

describe("APP_PACKAGE_JSON (monorepo-native-deps-in-app)", () => {
	it("includes react-native-reanimated in dependencies", () => {
		expect(APP_PACKAGE_JSON.dependencies["react-native-reanimated"]).toBe("3.16.1");
	});

	it("has app name", () => {
		expect(APP_PACKAGE_JSON.name).toBe("app");
	});
});
