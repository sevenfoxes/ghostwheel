const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    port: 8080,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "lodash-es": "lodash",
      "lodash.debounce": "lodash/debounce",
      ghostwheel: path.resolve(__dirname, "src/ghostwheel/"),
      primitives: path.resolve(__dirname, "src/ghostwheel/primitives"),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "src/images/favicon.ico",
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
