const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const modeVal = process.env.NODE_ENV || "development";
const rootPath = path.resolve(__dirname, '../');

console.log('******************')
console.log(rootPath);

module.exports = {
  mode: modeVal,
  entry: path.resolve(rootPath, '/src/index.js'),
  output: {
    path: path.resolve(rootPath, "dist"),
    filename: "bundle.js",
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, '/template/index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    compress: true,
  },
};
