/** @type {import('jest').Config} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	roots: ["<rootDir>"],
	testMatch: [
		"**/exercises/**/*.test.ts",
		"**/exercises/**/*.test.tsx",
		"**/components/__tests__/**/*.test.{js,ts,tsx}",
	],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
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
};
