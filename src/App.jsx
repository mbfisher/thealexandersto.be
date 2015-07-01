'use strict';

import React from 'react';
import Fluxible from 'fluxible';
import {Route, DefaultRoute} from 'react-router';
import Application from './components/Application';

import InvitationStore from './stores/InvitationStore';
import ErrorStore from './stores/ErrorStore';
import LoadingStore from './stores/LoadingStore';
import PushStore from './stores/PushStore';

import CookieDough from 'cookie-dough';
import InvitationService from './services/Invitations';

const app = new Fluxible({
    component: Application
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
                actionContext.invitations = InvitationService.create()
            }
        };
    }
});

app.registerStore(InvitationStore);
app.registerStore(LoadingStore);
app.registerStore(ErrorStore);
app.registerStore(PushStore);

module.exports = app;