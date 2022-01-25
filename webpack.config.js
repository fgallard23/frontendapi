const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.[contenthash].js',
    },

    mode: 'none', // development

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{ loader: 'file-loader' }]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css' // output file
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Full Stack JS - Code Challenge',
            description: 'react, express, mocha+chai, ES6, react bootstrap, webpack, hooks, redux, docker, standarjs '
        })
    ]
};