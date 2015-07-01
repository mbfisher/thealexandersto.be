'use strict';

import {createStore} from 'fluxible/addons';
import _ from 'lodash';
const debug = require('debug')('app:store:push');

export default createStore({
    storeName: 'PushStore',
    handlers: {
        PUSH_START: 'onStart',
        PUSH_ERROR: 'onError',
        PUSH_DONE: 'onDone'
    },

    initialize: function () {
        this._isPushing = false;
        this._currentPush = null;
        this._lastPush = null;
    },

    onStart: function (payload) {
        this._isPushing = true;
        this._currentPush = payload;

        this.emitChange();
    },

    onError: function (payload) {
        this._isPushing = false;
        this._lastPush = this._currentPush;
        this._lastPush.error = payload.error;
        this._currentPush = null;

        this.emitChange();
    },

    onDone: function (payload) {
        this._isPushing = false;
        this._lastPush = this._currentPush;
        this._currentPush = null;

        this.emitChange();
    },

    isPushing: function () {
        return this._isPushing;
    },
    getCurrentPush: function () {
        return this._currentPush;
    },
    hasLastPush: function () {
        return !!this._lastPush
    },
    getLastPush: function () {
        return this._lastPush;
    },
    getLastPushTime: function () {
        return this._lastPush ? this._lastPush.timestamp : undefined;
    },
    hasError: function () {
        return this._lastPush && this._lastPush.error;
    },
    getError: function () {
        return this._lastPush ? this._lastPush.error : undefined;
    }
});