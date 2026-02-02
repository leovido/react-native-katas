/** @type {import('jest').Config} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	roots: ["<rootDir>"],
	testMatch: [
		"**/exercises/**/*.test.ts",
		"**/exercises/**/*.test.tsx",
		"**/components/__tests__/**/*.test.{js,ts,tsx}",
	],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
		"^react-native$": "<rootDir>/__mocks__/react-native.js",
	},
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				useESM: false,
				tsconfig: {
					module: "commonjs",
					jsx: "react-jsx",
				},
			},
		],
	},
	globals: {
		TEST_FILE: process.env.TEST_FILE || "solution",
	},
	collectCoverageFrom: [
		"components/**/*.{ts,tsx}",
		"exercises/**/solution.tsx",
		"exercises/**/solution.ts",
		"exercises/test-utils.ts",
		"!**/*.test.{ts,tsx}",
		"!**/__tests__/**",
		"!**/problem.tsx",
		"!**/work.tsx",
	],
	coverageReporters: ["text", "lcov"],
	coverageThreshold: {
		global: {
			branches: 59,
			functions: 76,
			lines: 80,
			statements: 80,
		},
	},
};
