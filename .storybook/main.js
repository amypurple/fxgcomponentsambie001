// Cours 2/Exemple/.storybook/main.js
module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	components: ["../lib/**/*.components.mdx", "../lib/**/*.components.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
	framework: "@storybook/react",
	staticDirs: [{ from: "../src/assets", to: "/assets" }],
};
