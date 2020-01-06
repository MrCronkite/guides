const path = require("path");
const htmlPlugins = require("html-webpack-plugin");
const miniCssPlug = require("mini-css-extract-plugin");
const optimazeCss = require("optimize-css-assets-webpack-plugin");
const terserMini = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [new optimazeCss({}), new terserMini({})]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 5000
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
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [miniCssPlug.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [miniCssPlug.loader, "css-loader"]
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
