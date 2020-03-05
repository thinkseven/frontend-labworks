const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // https://reactjs.org/docs/cross-origin-errors.html
    devtool: 'cheap-module-source-map',
    entry: process.env['SIMULATOR'] === 'false' ? './src/index.js' : './src/index-start.js',
    output: {
        filename: 'visualizer.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Json Visualizer - Postman Sandbox',
            hash: false
        })
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test: /\.css$/,
                exclude: /node_mdules/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    }
}