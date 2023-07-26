/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const { CracoAliasPlugin } = require('react-app-alias');
const CracoSwcPlugin = require('craco-swc');

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    { plugin: CracoSwcPlugin },
    { plugin: CracoAliasPlugin },
  ],
  style: {
    modules: {
      localIdentName: '[local]_[hash:base64:5]',
    },
    css: {
      loaderOptions: {
        modules: {
          exportLocalsConvention: 'camelCaseOnly',
        },
      },
    },
  },
};
