const prettierConfig = require('../.prettierrc');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "storybook-addon-designs",
    {
      name: '@storybook/addon-docs',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [ '../src'], // You can specify directories
        },
        loaderOptions: {
          prettierConfig,
        },
      },
    },
  ],
}