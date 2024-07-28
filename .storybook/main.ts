import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/*/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],

  //No need for now
  // // Add the typescript loader and options
  // webpackFinal: async (config) => {
  //   if (!config.module) {
  //     throw new Error('Expected "module" property in webpack config');
  //   }

  //   // Make sure config.module.rules is an array
  //   if (!config.module.rules) {
  //     config.module.rules = [];
  //   }

  //   // Push your TypeScript rule to the rules array
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     use: [
  //       {
  //         loader: require.resolve("babel-loader"),
  //         options: {
  //           presets: [["react-app", { flow: false, typescript: true }]],
  //         },
  //       },
  //       // ...other loaders
  //     ],
  //   });

  //   // Initialize config.resolve.extensions if it's undefined
  //   if (!config.resolve) {
  //     config.resolve = {};
  //   }
  //   if (!config.resolve.extensions) {
  //     config.resolve.extensions = [];
  //   }

  //   config.resolve.extensions.push(".ts", ".tsx");

  //   return config;
  // },
};

export default config;
