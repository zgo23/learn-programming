const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    target: "node",
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify("5fa3b9"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object"),
            "process.evn.NODE_EVN": JSON.stringify(process.env.NODE_ENV),
        }),
    ],
};
