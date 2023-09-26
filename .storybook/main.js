const path = require('path');

module.exports = {
  stories: ['../src/**/*.mdx', '../**/*.story.ts', '../**/*.story.tsx', '../**/*.story.tsx'],

  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-storysource'],
  webpackFinal: async (config, { configType }) => {
    config.resolve = {
      ...(config.resolve || {}),
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        src: path.resolve(__dirname, '../src'),
      },
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]-[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },

  docs: {
    autodocs: true,
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
