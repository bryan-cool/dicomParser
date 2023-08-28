const merge = require('./merge.cjs');
const baseConfig = require('./webpack-base.cjs');
const TerserPlugin = require('terser-webpack-plugin');

const devConfig = {
  output: {
    filename: '[name].min.js'
  },
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      })
    ]
  },
};

module.exports = merge(baseConfig, devConfig);