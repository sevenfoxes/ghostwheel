import HtmlWebPackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  devServer: {
    port: 8080,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  devtool: "cheap-source-map",
  output: {
    publicPath: "/",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(tsx)$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(jpg|svg|png|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.resolve(__dirname), "node_modules", "test-utils"],
    alias: {
      "lodash-es": "lodash",
      "lodash.debounce": "lodash/debounce",
      primitives$: path.resolve(__dirname, "primitives/"),
      components$: path.resolve(__dirname, "components/")
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "src/images/favicon.ico",
    }),
  ],
};
