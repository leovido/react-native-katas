import * as path from "node:path";
import { getTestFile, readTestFile } from "../test-utils";

describe("test-utils", () => {
	describe("getTestFile", () => {
		const exerciseTestDir = path.resolve(__dirname, "../01-ui-pressable/__tests__");

		it("returns path to solution.tsx when TEST_FILE is unset or solution", () => {
			delete process.env.TEST_FILE;
			const filePath = getTestFile(exerciseTestDir);
			expect(filePath).toMatch(/solution\.tsx$/);
			expect(filePath).toContain("01-ui-pressable");
		});

		it("returns path to work.tsx when TEST_FILE=work", () => {
			process.env.TEST_FILE = "work";
			const filePath = getTestFile(exerciseTestDir);
			expect(filePath).toMatch(/work\.tsx$/);
			process.env.TEST_FILE = "solution";
		});
	});

	describe("readTestFile", () => {
		const exerciseTestDir = path.resolve(__dirname, "../01-ui-pressable/__tests__");

		it("reads solution file content when TEST_FILE is solution", () => {
			process.env.TEST_FILE = "solution";
			const content = readTestFile(exerciseTestDir);
			expect(typeof content).toBe("string");
			expect(content.length).toBeGreaterThan(0);
			expect(content).toContain("Pressable");
		});

		it("reads work file content when TEST_FILE=work", () => {
			process.env.TEST_FILE = "work";
			const content = readTestFile(exerciseTestDir);
			expect(typeof content).toBe("string");
			process.env.TEST_FILE = "solution";
		});
	});
});
