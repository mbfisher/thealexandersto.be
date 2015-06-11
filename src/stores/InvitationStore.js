'use strict';

import {createStore} from 'fluxible/addons';
const debug = require('debug')('app:store:invitation');

export default createStore({
    storeName: 'InvitationStore',
    handlers: {
        RECEIVE_INVITATION: 'receiveInvitation'
    },

    initialize: function () {
        this.username = null;
    },

    receiveInvitation: function (invitation) {
        debug('Received invitation', invitation);
        this.username = invitation.username;

        this.emitChange();
    },

    getUsername: function () {
        return this.username;
    },

    dehydrate: function () {
        return {
            username: this.getUsername()
        };
    },

    rehydrate: function (state) {
        this.username = state.username;
    }
});