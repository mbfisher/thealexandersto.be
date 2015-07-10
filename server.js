'use strict';

if (process.env.NODE_ENV === 'production') {
    require('newrelic');
}

import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import React from 'react';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';
import HtmlComponent from './src/components/Html';
import serialize from 'serialize-javascript';

const debug = require('debug')('app:express');
const server = express();

server.set('host', '0.0.0.0');
server.set('port', (process.env.PORT || 5000));
server.use(cookieParser());
server.use(bodyParser.json());

if (process.env.NODE_ENV === 'dev') {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');

    server.use(webpackDevMiddleware(webpack(webpackConfig), {
        noInfo: true
    }));
}

server.use(express.static(__dirname + '/public'));

var MongoClient = require('mongodb').MongoClient;

import loginController from './src/api/login';
server.post('/login', loginController);

import app from './src/App';
import authAction from './src/actions/auth';

server.use((req, res, next) => {
    let context = app.createContext({
        req: req
    });

    context.executeAction(authAction, null, () => {
        let state = serialize(app.dehydrate(context));

        let markup = React.renderToString(
            React.createElement(
                FluxibleComponent,
                {context: context.getComponentContext()},
                context.createElement()
            )
        );
        let html = React.renderToStaticMarkup(
            React.createElement(HtmlComponent, {markup: markup, state: state})
        );

        res.send(html);
    });
});

server.listen(server.get('port'), server.get('host'), function() {
    debug('Express running on '+server.get('host')+':'+server.get('port'));
});
