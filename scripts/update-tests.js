const fs = require("fs");
const path = require("path");

// Recursively find all test files
function findTestFiles(dir, fileList = []) {
	const files = fs.readdirSync(dir);

	files.forEach((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			findTestFiles(filePath, fileList);
		} else if (file.endsWith("-rule.test.ts")) {
			fileList.push(filePath);
		}
	});

	return fileList;
}

const exercisesDir = path.join(process.cwd(), "exercises");
const testFiles = findTestFiles(exercisesDir);

for (const file of testFiles) {
	let content = fs.readFileSync(file, "utf-8");
	const originalContent = content;

	// Replace the imports and helper function
	content = content.replace(
		/import \* as fs from "node:fs";\nimport \* as path from "node:path";\n\nconst WORK_FILE = path\.resolve\(__dirname, "\.\.\/work\.tsx"\);\n\nfunction readWorkFile\(\): string \{\n\treturn fs\.readFileSync\(WORK_FILE, "utf-8"\);\n\}/,
		'import { readTestFile } from "../../test-utils";',
	);

	// Replace readWorkFile() calls
	content = content.replace(/readWorkFile\(\)/g, "readTestFile(__dirname)");

	// Update describe text
	content = content.replace(
		/describe\("([^"]+) rule \(static checks on work\.tsx\)", \(\) => \{/,
		'describe("$1 rule", () => {',
	);

	if (content !== originalContent) {
		fs.writeFileSync(file, content, "utf-8");
		console.log(`Updated: ${path.relative(process.cwd(), file)}`);
	}
}

console.log(`\nProcessed ${testFiles.length} test files.`);
