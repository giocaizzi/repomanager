/** @type { import('@storybook/nextjs').StorybookConfig } */

import path from "path";


const config = {
  stories: [
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  /* static */
  staticDirs: [
    '../public',
  ],
  /* solve "@" imports */
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, "../components"),
      '@lib': path.resolve(__dirname, "../lib"),
    };
    return config;
  },
};
export default config;
