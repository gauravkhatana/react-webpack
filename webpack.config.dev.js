const { merge } = require("webpack-merge");
const path = require("path");
const commonConfig = require("./webpack.config");
const webpack = require("webpack");
const { EnvironmentPlugin } = require("webpack");

const devConfig = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "development-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new EnvironmentPlugin({
      API: "htttps://www.dev.com",
      "process.env.NODE_ENV": JSON.stringify("development"), // or 'production',
      REACT_APP_MODE: "development",
      "process.env.PUBLICURL": "/public",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);

// module.exports = function (webpackEnv) {
//   console.log(webpackEnv.NODE_ENV); // 'production'
//   console.log(webpackEnv.production); // true
//   console.log(webpackEnv.foo); // 'bar'
//   console.log(webpackEnv.mode); // 'production'

//   // Use webpackEnv properties to conditionally configure webpack
//   const isProduction = webpackEnv.production === true;

//   const config = {
//     entry: "./src/index.js",
//     output: {
//       path: isProduction ? "./dist" : "./build",
//       filename: isProduction ? "bundle.prod.js" : "bundle.dev.js",
//     },
//   };
// };
