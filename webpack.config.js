'use strict';

const webpack = require('webpack');
const path = require('path');
var pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(pathToPhaser, 'dist/phaser.js');

module.exports = {

    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },

    module: {
        rules: [{
                test: [/\.vert$/, /\.frag$/],
                use: 'raw-loader'
            },
            { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
            { test: /phaser\.js$/, loader: 'expose-loader?Phaser' }
        ]
    },
    resolve: {
        extensions: [".ts",".js"],
        alias: {
          phaser: phaser
        }
    },
    devServer: { // 配置 webpack-dev-server
      contentBase: path.resolve(__dirname, './'),
      publicPath: '/build/',
      host: 'localhost',
      port: 3000,
      open: true
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};
