const path = require("path");
module.exports = {
  // 1
  entry: "./src/index.js",
  // 2
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // 3
  devServer: {
    static: "./dist",
  },
};
