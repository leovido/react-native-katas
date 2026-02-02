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

	// Check if import already exists
	if (!content.includes("import { readTestFile }")) {
		// Add import at the beginning if the file uses readTestFile
		if (content.includes("readTestFile(__dirname)")) {
			content = 'import { readTestFile } from "../../test-utils";\n\n' + content;
		}
	}

	if (content !== originalContent) {
		fs.writeFileSync(file, content, "utf-8");
		console.log(`Added import to: ${path.relative(process.cwd(), file)}`);
	}
}

console.log(`\nProcessed ${testFiles.length} test files.`);
