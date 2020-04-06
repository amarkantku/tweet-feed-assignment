const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const env = dotenv.config({ path: path.join(__dirname, '.env') }).parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.json']
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build')
    },
    module: {
        rules: [
            { test: /\.(jsx?)$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.html$/, loader: 'html-loader' },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/public/index.html",
            filename: "./index.html",
            favicon: "./src/public/favicon.ico"
        }),
        new webpack.DefinePlugin(envKeys)
    ]
};