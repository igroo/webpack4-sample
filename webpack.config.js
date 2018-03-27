const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    entry: {
        'vendor': ['jquery'],
        'bundle1': './src/app/index1.js',
        'bundle2': './src/app/index2.js'
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
            {
                from: './src/assets',
                to: 'assets',
                toType: 'dir'
            }
        ], { 
            copyUnmodified: true 
        }),
        new CleanWebpackPlugin(['dist'], {watch: true})
    ]
};