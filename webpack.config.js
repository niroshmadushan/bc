const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.js', // Adjust this to your main entry point
  output: {
    filename: '[name].js', // The output bundle file
    path: path.resolve(__dirname, 'dev_build'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  target: 'node', // Specify 'node' to avoid bundling built-in modules like fs, path, etc.
  externals: [nodeExternals()], // Exclude node_modules from the bundle
  mode: 'production', // Use 'development' during development
};
