import { APP_PACKAGE_JSON } from "../solution";

describe("APP_PACKAGE_JSON (monorepo-single-dependency-versions)", () => {
	it("has dependencies with exact version", () => {
		expect(APP_PACKAGE_JSON.dependencies["react-native-reanimated"]).toBe("3.16.1");
	});

	it("has app name", () => {
		expect(APP_PACKAGE_JSON.name).toBe("app");
	});
});
