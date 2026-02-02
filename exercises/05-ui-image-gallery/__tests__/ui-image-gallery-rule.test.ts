import { readTestFile } from "../../test-utils";

describe("ui-image-gallery rule", () => {
	const source = readTestFile(__dirname);

	it("must use Galeria from @nandorojo/galeria", () => {
		expect(source).toMatch(/Galeria|@nandorojo\/galeria/);
		const hasGaleriaImport =
			/import\s*\{[^}]*Galeria[^}]*\}\s*from\s*["']@nandorojo\/galeria["']/.test(source) ||
			/from\s*["']@nandorojo\/galeria["']/.test(source);
		expect(hasGaleriaImport).toBe(true);
	});

	it("must use Galeria.Image for gallery items", () => {
		expect(source).toMatch(/Galeria\.Image/);
	});

	it("must not use Modal for lightbox", () => {
		expect(source).not.toMatch(/<Modal\s/);
	});
});
