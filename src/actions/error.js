'use strict';

export default function errorAction(context, payload, done) {
    context.dispatch('RECEIVE_ERROR', {
        message: payload.message,
        isLogin: payload.isLogin
    });
    done();
}