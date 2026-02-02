import { spawn } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import * as readline from "node:readline";

const ROOT = path.resolve(path.join(__dirname, ".."));
const EXERCISES_DIR = path.join(ROOT, "exercises");

const EXERCISE_DIR_PATTERN = /^(\d{2})-.+$/;

function getExercises(): string[] {
	const entries = fs.readdirSync(EXERCISES_DIR, { withFileTypes: true });
	const dirs = entries
		.filter((d) => d.isDirectory() && EXERCISE_DIR_PATTERN.test(d.name))
		.map((d) => d.name)
		.sort((a, b) => {
			const numA = parseInt(EXERCISE_DIR_PATTERN.exec(a)?.[1] ?? "0", 10);
			const numB = parseInt(EXERCISE_DIR_PATTERN.exec(b)?.[1] ?? "0", 10);
			return numA - numB;
		});
	return dirs;
}

function prompt(question: string): Promise<string> {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	return new Promise((resolve) => {
		rl.question(question, (answer) => {
			rl.close();
			resolve(answer.trim());
		});
	});
}

function openWorkFile(exerciseFolder: string): void {
	const workPath = path.join(ROOT, "exercises", exerciseFolder, "work.tsx");
	if (!fs.existsSync(workPath)) return;

	const editors: [string, string[]][] = [
		["cursor", [workPath]],
		["code", [workPath]],
	];
	const editorFromEnv = process.env.EDITOR;
	if (editorFromEnv) {
		const [cmd, ...rest] = editorFromEnv.trim().split(/\s+/);
		editors.push([cmd, [...rest, workPath]]);
	}

	function tryNext(index: number): void {
		if (index >= editors.length) {
			console.log(`  Open manually: ${workPath}\n`);
			return;
		}
		const [cmd, args] = editors[index];
		const child = spawn(cmd, args, {
			detached: true,
			stdio: "ignore",
		});
		child.unref();
		child.on("error", () => {
			tryNext(index + 1);
		});
	}
	tryNext(0);
}

function runJestWatch(exerciseFolder: string): Promise<number> {
	return new Promise((resolve) => {
		const jestPath = path.join("exercises", exerciseFolder);
		const child = spawn("pnpm", ["exec", "jest", jestPath, "--watch"], {
			cwd: ROOT,
			stdio: "inherit",
			shell: true,
		});
		child.on("close", (code) => {
			resolve(code ?? 0);
		});
	});
}

function printMenu(exercises: string[]): void {
	console.log(
		"\nReact Native Katas – choose an exercise (tests run in watch mode):\n",
	);
	for (let i = 0; i < exercises.length; i++) {
		const ruleId = exercises[i].replace(/^\d+-/, "");
		console.log(`  ${String(i + 1).padStart(2)}. ${exercises[i]}  (${ruleId})`);
	}
	console.log("");
}

async function main(): Promise<void> {
	const exercises = getExercises();
	if (exercises.length === 0) {
		console.error("No exercises found in exercises/");
		process.exit(1);
	}

	const max = exercises.length;

	for (;;) {
		printMenu(exercises);
		const raw = await prompt(`Enter number (1-${max}), or 'q' to quit: `);

		if (raw.toLowerCase() === "q") {
			console.log("Bye.");
			process.exit(0);
		}

		const num = Number.parseInt(raw, 10);
		if (Number.isNaN(num) || num < 1 || num > max) {
			console.error(
				`Invalid choice. Enter a number between 1 and ${max}, or 'q' to quit.`,
			);
			continue;
		}

		const exerciseFolder = exercises[num - 1];
		openWorkFile(exerciseFolder);
		console.log(`\nRunning tests in watch mode for ${exerciseFolder}...\n`);
		await runJestWatch(exerciseFolder);
		console.log("\n(Back to exercise list)\n");
	}
}

main();
