const path = require('path');
const rootPath = process.cwd();
const context = path.join(rootPath, "src");
const outputPath = path.join(rootPath, 'dist');
const bannerPlugin = require(path.join(__dirname, 'plugins', 'banner.cjs'));
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  context: context,
  entry: {
    dicomParser: './index.js'
  },
  externals: {
    'zlib': 'zlib'
  },
  node: false,
  target: 'web',
  output: {
    filename: '[name].js',
    library: {
      commonjs: "dicom-parser",
      amd: "dicom-parser",
      root: 'dicomParser'
    },
    libraryTarget: 'umd',
    globalObject: 'this',
    path: outputPath,
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  plugins: [
    bannerPlugin(),
    new ESLintPlugin({
      exclude: ['node_modules', 'test'],
      failOnError: false
    })
  ]
};
