'use strict';

import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import React from 'react';
import Router from 'react-router';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';
import HtmlComponent from './src/components/Html';
import serialize from 'serialize-javascript';
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import webpackConfig from './webpack.config'

const debug = require('debug')('app:express');
const server = express();

server.set('host', '0.0.0.0');
server.set('port', (process.env.PORT || 5000));
server.use(cookieParser());
server.use(bodyParser.json());
server.use(webpackDevMiddleware(webpack(webpackConfig), {
    noInfo: true
}));
server.use(express.static(__dirname + '/public'));

var MongoClient = require('mongodb').MongoClient;

/*server.use((req, res, next) => {
    const db = server.get('db');

    if (!db) {
       debug('Connecting to mongo');
        MongoClient.connect(process.env.MONGOHQ_URL, function (err, db) {
            debug('Mongo connection established');

            server.set('db', db);
            req.db = db;
            next();
        });
    } else {
        req.db = db;
        next();
    }
});*/

import loginController from './src/api/login';
server.post('/login', loginController);

import app from './src/App';
import authAction from './src/actions/auth';

server.use((req, res, next) => {
    let context = app.createContext({
        req: req
    });

    context.executeAction(authAction, null, () => {
        Router.run(app.getComponent(), req.path, (Root, route) => {
            let state = serialize(app.dehydrate(context));

            let markup = React.renderToString(
                React.createElement(
                    FluxibleComponent,
                    {context: context.getComponentContext()},
                    React.createElement(Root)
                )
            );
            let html = React.renderToStaticMarkup(
                React.createElement(HtmlComponent, {markup: markup, state: state})
            );

            res.send(html);
        });
    });
});

server.listen(server.get('port'), server.get('host'), function() {
    debug('Express running on '+server.get('host')+':'+server.get('port'));
});