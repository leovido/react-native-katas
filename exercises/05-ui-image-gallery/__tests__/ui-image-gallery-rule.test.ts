import * as fs from "node:fs";
import * as path from "node:path";

const WORK_FILE = path.resolve(__dirname, "../work.tsx");

function readWorkFile(): string {
	return fs.readFileSync(WORK_FILE, "utf-8");
}

describe("ui-image-gallery rule (static checks on work.tsx)", () => {
	const source = readWorkFile();

	it("must use Galeria from @nandorojo/galeria", () => {
		expect(source).toMatch(/Galeria|@nandorojo\/galeria/);
		const hasGaleriaImport =
			/import\s*\{[^}]*Galeria[^}]*\}\s*from\s*["']@nandorojo\/galeria["']/.test(
				source,
			) || /from\s*["']@nandorojo\/galeria["']/.test(source);
		expect(hasGaleriaImport).toBe(true);
	});

	it("must use Galeria.Image for gallery items", () => {
		expect(source).toMatch(/Galeria\.Image/);
	});

	it("must not use Modal for lightbox", () => {
		expect(source).not.toMatch(/<Modal\s/);
	});
});
