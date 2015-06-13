'use strict';

import {createStore} from 'fluxible/addons';

export default createStore({
    storeName: 'LoadingStore',
    handlers: {
        START_LOADING: 'startLoading',
        STOP_LOADING: 'stopLoading'
    },

    initialize: function () {
        this._isLoading = false;
    },

    startLoading: function () {
        this._isLoading = true;
        this.emitChange();
    },

    stopLoading: function () {
        this._isLoading = false;
        this.emitChange();
    },

    isLoading: function () {
        return this._isLoading;
    }
});
