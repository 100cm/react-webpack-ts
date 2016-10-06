var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers/helpers');
var path = require('path')
var React = require('react')
var reactDom = require('react-dom')

module.exports = {
    entry: {
        'app': './src/index.tsx'
    },

    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"],
        alias: {
            jquery: path.join(__dirname, "../node_modules/jquery/dist/jquery")
        }
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },

            {
                test: /\.tsx?$/, loader: "ts-loader"
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/fonts/[name].[hash].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file?name=public/img/[name].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            },

        ]
    },


    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        // load once
        new webpack.ProvidePlugin({
            "React": "react", 'reactDom': 'react-dom'
        }),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),


    ]
};
