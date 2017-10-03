const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        panel: "./src/panel.js",
        background: "./src/background.js",
        content: "./src/content.js",
        devtools: "./src/devtools.js"
    },
    output: {
        path: path.resolve("extension/dist"),
        filename: "[name].js",
        publicPath: "/assets"
    },
    resolve: {
        extensions: ['.js', '.vue'],

    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': "'production'"
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}

