const path = require('path');
const process = require('process');
const ExtendedDefinePlugin = require('extended-define-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules[0].loader = 'babel-loader';
  defaultConfig.resolve.alias['react-ui-framework'] = path.resolve(__dirname, '../../lib');
  defaultConfig.resolve.alias['react'] = path.resolve(__dirname, '../../node_modules', 'react');
  defaultConfig.resolve.alias['styled-components'] = path.resolve(__dirname, '../../node_modules', 'styled-components');
  defaultConfig.resolve.modules.push(path.resolve(__dirname, 'node_modules'), 'node_modules');
  defaultConfig.plugins.push(
    new ExtendedDefinePlugin({
      __FONT_AWESOME__: process.env.NODE_ENV === 'production' ? 'sha384-HX5QvHXoIsrUAY0tE/wG8+Wt1MwvaY28d9Zciqcj6Ob7Tw99tFPo4YUXcZw9l930' : 'local',
    })
  );

  return defaultConfig;
};
