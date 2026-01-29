import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("list-performance-images rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use expo-image or request resized/thumbnail URL", () => {
		const usesExpoImage = /expo-image|from\s*["']expo-image["']/.test(source);
		const usesThumbnailUrl = /thumbnailUrl|thumbnail|w=\d+|h=\d+|fit=/.test(
			source,
		);
		expect(usesExpoImage || usesThumbnailUrl).toBe(true);
	});

	it("must not use raw imageUrl for list thumbnail without resize", () => {
		// Should derive thumbnail URL (e.g. with query params), not use product.imageUrl directly for small thumb
		const rawUriOnly = /source=\{\{\s*uri:\s*product\.imageUrl\s*\}\}/.test(
			source,
		);
		expect(rawUriOnly).toBe(false);
	});
});
