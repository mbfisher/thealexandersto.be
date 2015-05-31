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

app.registerStore(InvitationStore);

module.exports = app;