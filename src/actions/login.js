'use strict';

export default function loginAction (context, payload, done) {
    context.dispatch('RECEIVE_INVITATION', {
        username: payload.username
    });

    done();
};