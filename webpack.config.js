const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.web',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.web.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['main'],
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCssPlugin({
            filename: 'styles/[name].[contenthash:8].css',
            chunkFilename: 'styles/[name].[contenthash:8].css'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
};