'use strict';

import {createStore} from 'fluxible/addons';

export default createStore({
    storeName: 'ErrorStore',
    handlers: {
        RECEIVE_ERROR: 'receiveError'
    },

    initialize: function () {
        this._message = null;
    },

    receiveError: function (error) {
        this._message = error.message;

        this.emitChange();
    },

    getMessage: function () {
        return this._message;
    }
});