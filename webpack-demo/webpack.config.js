const path = require("path");
const htmlPlugins = require("html-webpack-plugin");
const miniCssPlug = require("mini-css-extract-plugin");
const optimazeCss = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [new optimazeCss({})]
  },
  plugins: [
    new htmlPlugins({
      filename: "index.html",
      template: "./src/main.html"
    }),
    new miniCssPlug({
      filename: "main.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCssPlug.loader, "css-loader"]
      }
    ]
  }
};
