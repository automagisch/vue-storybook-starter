const path = require('path');
const vite = require('vite');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    'storybook-dark-mode'
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, { configType }) {
    // Be sure to return the customized config
    return vite.mergeConfig(config, {
      // Customize the Vite config for Storybook
      resolve: {
        alias: { '@': path.resolve(__dirname, '../src') },
        extensions: ['.mjs', '.js', '.json', '.vue', '.scss']
      },
      css: {
        preprocessorOptions: {
          scss: {}
        }
      },
    })
  },
}
