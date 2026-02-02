import * as fs from "node:fs";
import * as path from "node:path";
import { glob } from "glob";

const testFiles = glob.sync("exercises/**/*-rule.test.ts", {
	cwd: process.cwd(),
});

for (const file of testFiles) {
	const filePath = path.join(process.cwd(), file);
	let content = fs.readFileSync(filePath, "utf-8");

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

	fs.writeFileSync(filePath, content, "utf-8");
	console.log(`Updated: ${file}`);
}

console.log(`\nUpdated ${testFiles.length} test files.`);
