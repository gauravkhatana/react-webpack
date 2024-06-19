const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.config");
const { EnvironmentPlugin } = require("webpack");

const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "production-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new EnvironmentPlugin({
      API: "htttps://www.prod.com",
      "process.env.NODE_ENV": JSON.stringify("Production"), // or 'development',
      REACT_APP_MODE: "development",
      PUBLICURL: "/public",
    }),
    new MiniCssExtractPlugin({
      filename: "production-buldle.css", // Output CSS file name
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
