'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['./client.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /.jsx?$/, loader: 'babel'}
        ]
    }
};