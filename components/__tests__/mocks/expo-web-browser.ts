/**
 * Shared mock for expo-web-browser used by EditScreenInfo and ExternalLink tests.
 */
export const mockExpoWebBrowser = () => ({
	openBrowserAsync: jest.fn().mockResolvedValue({ type: "dismiss" }),
});
