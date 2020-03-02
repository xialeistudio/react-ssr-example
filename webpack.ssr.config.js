const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.ssr',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.ssr.js',
        libraryTarget: 'commonjs2'
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
        new MiniCssPlugin({
            filename: 'styles/[name].[contenthash:8].css',
            chunkFilename: 'styles/[name].[contenthash:8].css'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
};