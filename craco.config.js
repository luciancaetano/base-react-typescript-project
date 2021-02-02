/* eslint-disable */
const CracoAlias = require("craco-alias");

module.exports = {
  eslint: {
    enable: false
  },
   plugins: [
     {
        plugin: CracoAlias,
        options: {
           source: "tsconfig",
           baseUrl: ".",
           tsConfigPath: "./tsconfig.paths.json"
        }
     }
  ]
};
