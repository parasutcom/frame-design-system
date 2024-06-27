import type { StorybookConfig } from '@storybook/web-components-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../docs/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    if (!config.module) {
      config.module = { rules: [] };
    }
    
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push(
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true,
            },
          },
          'extract-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    );

    if (!config.resolve) {
      config.resolve = { extensions: [] };
    }
    
    if (!config.resolve.extensions) {
      config.resolve.extensions = [];
    }

    config.resolve.extensions.push('.ts', '.tsx');
    
    return config;
  },
};
export default config;
