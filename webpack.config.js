const path = require('path');


module.exports = {
    entry: {
        main: "./src/app.tsx",
        events: "./src/events.ts",
        content: "./src/content.ts"
    },
    output: {
        path: path.resolve("extension/dist"),
        filename: "[name].js",
        publicPath: "/assets"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /.tsx?$/, loader: 'ts-loader' },
            { test: /.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    }
}