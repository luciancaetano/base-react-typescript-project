/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const loaderUtils = require('loader-utils');

const regexLikeIndexModule = /(?<!pages[\\/])index\.module\.(scss|sass|css)$/;

function getBemCssLocalIdent(context, _, exportName, options) {
  const relativePath = path
    .relative(context.rootContext, context.resourcePath)
    .replace(/\\+/g, '/');

  const fileNameOrFolder = regexLikeIndexModule.test(relativePath)
    ? '[folder]'
    : '[name]';

  const hash = loaderUtils.getHashDigest(
    Buffer.from(`${relativePath}`),
    'sha1',
    'base64',
    128,
  );

  return (
    loaderUtils
      .interpolateName(
        context,
        `${hash}__${fileNameOrFolder}_${exportName}`,
        options,
      )
      .replace(
        /\.module_/,
        '_',
      )
      .replace(/[^a-zA-Z0-9-_]/g, '_')
      .replace(/^(\d|--|-\d)/, '__$1')
  );
}

module.exports = getBemCssLocalIdent;
