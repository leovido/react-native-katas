import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

const ROOT = path.resolve(path.join(__dirname, ".."));

function main(): void {
	const args = process.argv.slice(2);
	const exerciseName = args[0];
	const isReset = args[1] === "reset";

	if (!exerciseName) {
		console.error("Usage: pnpm run exercise:<name> [reset]");
		console.error("Example: pnpm run exercise:ui-pressable reset");
		process.exit(1);
	}

	const exerciseDir = path.join(ROOT, "exercises", exerciseName);
	const problemPath = path.join(exerciseDir, "problem.tsx");
	const workPath = path.join(exerciseDir, "work.tsx");

	if (!fs.existsSync(exerciseDir)) {
		console.error(`Exercise not found: ${exerciseName} (${exerciseDir})`);
		process.exit(1);
	}

	if (isReset) {
		if (!fs.existsSync(problemPath)) {
			console.error(`Problem file not found: ${problemPath}`);
			process.exit(1);
		}
		fs.copyFileSync(problemPath, workPath);
		console.log(`Reset work.tsx from problem.tsx for ${exerciseName}`);
	}

	const jestResult = spawnSync("pnpm", ["exec", "jest", path.join("exercises", exerciseName)], {
		cwd: ROOT,
		stdio: "inherit",
		shell: true,
	});

	process.exit(jestResult.status ?? 1);
}

main();
