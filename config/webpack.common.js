/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        vendor: ["react", "react-dom"],
        app: path.resolve(__dirname, "../src", "index.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.js",
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            components: path.resolve(__dirname, "../src", "components"),
            scss: path.resolve(__dirname, "../src", "assets", "scss"),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: ["ts-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ProvidePlugin({ React: "react" }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public", "index.html"),
        }),
    ],
};
