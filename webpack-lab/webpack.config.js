const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const package = require('./package.json');

module.exports = {
    entry: {
        vendor: Object.keys(package.dependencies),
        app: './src/scripts/index.js',
        styles: './src/styles/layout.css'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./scripts/[name].bundle.js"
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // instead of style-loader
                    'css-loader'
                ]
            }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './styles/[name].css'
        })
    ]
};