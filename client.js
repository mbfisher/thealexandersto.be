'use strict';

require('./styles/index.scss');

import React from 'react';
import app from './src/App';
import FluxibleComponent from 'fluxible/addons/FluxibleComponent';
import debug from 'debug';

debug.enable('*');

app.rehydrate(window.App, function (err, context) {
    let element = React.createElement(
        FluxibleComponent,
        {context: context.getComponentContext()},
        context.createElement()
    );

    React.render(element, document.getElementById('app'));
});