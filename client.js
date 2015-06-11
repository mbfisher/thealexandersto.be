'use strict';

import React from 'react';
import app from './src/App';
import Router from 'react-router';
import {HistoryLocation} from 'react-router';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';
import debug from 'debug';

debug.enable('*');

app.rehydrate(window.App, function (err, context) {
    Router.run(app.getComponent(), HistoryLocation, function (Root, route) {
        let element = React.createElement(
            FluxibleComponent,
            {context: context.getComponentContext()},
            React.createElement(Root)
        );

        React.render(element, document.getElementById('app'));
    });
});