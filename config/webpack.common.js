/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ProvidePlugin } = require("webpack");
const { join } = require("path");

module.exports = {
    entry: {
        vendor: ["react", "react-dom"],
        app: join(__dirname, "..", "src", "index.tsx"),
    },
    output: {
        path: join(__dirname, "..", "dist"),
        filename: "[name].bundle.js",
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            components: join(__dirname, "..", "src", "components"),
            scss: join(__dirname, "..", "src", "assets", "scss"),
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
                type: "asset/resource",
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack", "file-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ProvidePlugin({ React: "react" }),
        new HtmlWebpackPlugin({ template: join(__dirname, "..", "public", "index.html") }),
    ],
};
