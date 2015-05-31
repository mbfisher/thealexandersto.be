'use strict';

export default function navigateAction(context, payload, done) {
    context.dispatch('NAVIGATE', payload);
    done();
};