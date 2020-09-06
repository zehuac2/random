const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  const isDevelopment = env.mode === "development";

  let config = {
    mode: env.mode,
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
          test: /\.s(a|c)ss$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
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
    output: {
      filename: "[name].[contenthash].js"
    },
    plugins: [
      new CleanWebpackPlugin(),
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
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all"
      },
      moduleIds: 'hashed',
    }
  };

  if (!isDevelopment) {
    config.plugins.push(new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }));
  }

  return config;
};
