const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts",
  },
  mode: "production",
  // devServer: {
  //   contentBase: "./",
  // },
};
