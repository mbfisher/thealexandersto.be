'use strict';

import InvitationStore from '../stores/InvitationStore';
import loginAction from '../actions/login';
const debug = require('debug')('app:action:auth');

export default function authAction (context, payload, done) {
    debug('Checking cookies for username', context.cookies.all());

    let username = context.cookies.get('u');

    if (!username) {
        debug('No username found');
        return done();
    }

    debug('Found username, logging in');
    context.executeAction(loginAction, {username: username}, done);
};