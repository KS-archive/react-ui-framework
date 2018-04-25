const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules[0].loader = 'babel-loader';
  defaultConfig.resolve.modules.push(path.resolve(__dirname, 'node_modules'), 'node_modules');

  return defaultConfig;
};
