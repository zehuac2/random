const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env) => {
  const isDevelopment = env.mode === "development";

  return {
    resolve: {
      extensions: [".ts", ".js", ".vue"],
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            "vue-loader"
          ]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader"
          ]
        },
        {
          test: /\.ts$/,
          use: [
            "babel-loader",
            {
              loader: "ts-loader",
              options: {
                appendTsSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
    entry: {
      index: path.resolve(__dirname, "src", "index.ts"),
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join("public", "index.html"),
        chunks: ["index"],
      }),
    ],
    devServer: {
      port: 4000,
    },
  };
};
