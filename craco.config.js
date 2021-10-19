/* eslint-disable */
const CracoAlias = require('craco-alias');
const getLocalIdent = require('./getBemCssLocalIdent');

module.exports = {
  eslint: {
    enable: false,
  },
  style: {
    css: {
      loaderOptions: ((cssLoaderOptions) => ({
        ...cssLoaderOptions,
        modules: {
          auto: true,
          exportLocalsConvention: 'camelCase',
          getLocalIdent,
        },
      })),
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};