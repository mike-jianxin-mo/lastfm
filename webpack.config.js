'use strict';

var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // devtool: 'eval-source-map',
    context: __dirname + '/src',
    entry:  './app.js', 
    output: {
        path: __dirname + '/dist',
        filename: "lastfm.bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }
        ]
    },

    devServer: {
        contentBase: "./dist",
        colors: true,
        historyApiFallback: true,
        inline: true
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: 'static' }
        ])
    ],

}