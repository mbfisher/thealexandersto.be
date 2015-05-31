'use strict';

import express from 'express';
import React from 'react';
import Router from 'react-router';
import app from './src/app';
import navigateAction from './src/actions/navigate';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';
import HtmlComponent from './src/components/Html';
import serialize from 'serialize-javascript';

const server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(__dirname + '/public'));

server.use((req, res, next) => {
    let context = app.createContext();

    Router.run(app.getComponent(), req.path, (Root, route) => {
        context.executeAction(navigateAction, route, () => {
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

server.listen(server.get('port'), function() {
      console.log('Node app is running on port', server.get('port'));
});