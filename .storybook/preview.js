// Cours 2/Exemple/.storybook/preview.js
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		inlineStories: false,
		iframeHeight: "auto",
	},
};
