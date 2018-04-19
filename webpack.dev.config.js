/*
 * @Author: lixh
 * @Date:   2018-01-15 10:19:31
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-19 20:42:20
 * @type 本地环境
 */
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
var proxy = require('http-proxy-middleware');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js',
        publicPath: "/"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
        }]
    },
    devServer: {
        port: 9080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '192.168.31.30',
    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);