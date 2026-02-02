import * as fs from "node:fs";
import * as path from "node:path";

/**
 * Get the target file to test based on environment variable.
 * Defaults to 'solution.tsx' if not specified.
 * Set TEST_FILE=work to test work.tsx instead.
 */
export function getTestFile(testDir: string): string {
	const testFile = process.env.TEST_FILE || "solution";
	const filePath = path.resolve(testDir, `../${testFile}.tsx`);
	return filePath;
}

/**
 * Read the target test file (solution.tsx or work.tsx)
 */
export function readTestFile(testDir: string): string {
	const filePath = getTestFile(testDir);
	return fs.readFileSync(filePath, "utf-8");
}
