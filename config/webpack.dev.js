/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval",
    devServer: {
        host: "localhost",
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true,
    },
});
