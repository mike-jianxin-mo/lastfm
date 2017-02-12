'use strict';

var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
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
    externals: {
    'Config': 
        JSON.stringify({
            baseUrl: 'http://ws.audioscrobbler.com/2.0/',
            apiKey: '1abe7c7dfefac6f21af747c44c846861',
            format: 'json'
        })
    }, 

    plugins: [
        new CopyWebpackPlugin([
            { from: 'static' }
        ])
    ],

}