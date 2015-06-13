'use strict';

export default function (context, payload, done) {
    context.dispatch('START_LOADING');

    context.executeAction(payload.action, payload.payload, function (err) {
        if (err) {
            return done(err);
        }

        context.dispatch('STOP_LOADING');
        done();
    });
}