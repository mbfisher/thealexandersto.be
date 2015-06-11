'use strict';

import React from 'react';
import Fluxible from 'fluxible';
import {Route, DefaultRoute} from 'react-router';
import Application from './components/Application';
import MyInvitation from './components/pages/MyInvitation';
import Venue from './components/pages/Venue';
import Accommodation from './components/pages/Accommodation';
import Gifts from './components/pages/Gifts';
import OtherInfo from './components/pages/OtherInfo';

import InvitationStore from './stores/InvitationStore';
import ErrorStore from './stores/ErrorStore';

import CookieDough from 'cookie-dough';
import InvitationService from './services/Invitations';

var routes = (
    <Route name="app" path="/" handler={Application}>
        <Route name="venue" handler={Venue}/>
        <Route name="accommodation" handler={Accommodation}/>
        <DefaultRoute name="invitation" handler={MyInvitation}/>
        <Route name="gifts" handler={Gifts}/>
        <Route name="other" handler={OtherInfo}/>
    </Route>
);

const app = new Fluxible({
    component: routes
});

app.plug({
    name: 'CookiePlugin',
    plugContext: (options) => {
        return {
            plugActionContext: (actionContext) => {
                actionContext.cookies = new CookieDough(options.req);
            }
        };
    }
});

app.plug({
    name: 'ServicePlugin',
    plugContext: (options) => {
        return {
            plugActionContext: (actionContext) => {
                actionContext.invitations = new InvitationService(
                    'https://api.mongolab.com/api/1',
                    'N0l-xslNc1S0J9aN4LFSLrL9h-Z0blV_',
                    'heroku_nvq1vjmd',
                    'invitations'
                );
            }
        };
    }
});

app.registerStore(InvitationStore);
app.registerStore(ErrorStore);

module.exports = app;