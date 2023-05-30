const prettierConfig = require("../.prettierrc");

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "storybook-addon-designs",
    {
      name: "@storybook/addon-docs",
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: ["../src"], // You can specify directories
        },

        loaderOptions: {
          prettierConfig,
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  features: {
    storyStoreV7: false,
  },
};

export default config;
