'use strict';

import {createStore} from 'fluxible/addons';

export default createStore({
    storeName: 'ErrorStore',
    handlers: {
        RECEIVE_ERROR: 'receiveError'
    },

    initialize: function () {
        this._message = null;
        this._isLogin = false;
    },

    receiveError: function (error) {
        this._message = error.message;
        this._isLogin = !!error.isLogin;

        this.emitChange();
    },

    getMessage: function () {
        return this._message;
    },

    hasError: function () {
        return !!this._message;
    },

    isLoginError: function () {
        return this.hasError() && this._isLogin;
    }
});