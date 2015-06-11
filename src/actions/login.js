'use strict';

import errorAction from './error';
const debug = require('debug')('app:action:login');

export default function loginAction(context, payload, done) {
    const username = payload.username;
    debug('Attempting login for '+username);

    context.invitations.findOne({username: username}, (err, invitation) => {
        if (err) {
            debug('Login error for '+username, err);
            return done();
        }

        if (!invitation) {
            debug('Login failed for'+username);
            return context.executeAction(errorAction, {message: 'Login failed'}, done);
        }

        debug('Login success for '+username);
        context.cookies.set('u', username);
        context.dispatch('RECEIVE_INVITATION', invitation);
        done();
    })
}