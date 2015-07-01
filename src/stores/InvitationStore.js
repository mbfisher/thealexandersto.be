'use strict';

import {createStore} from 'fluxible/addons';
import _ from 'lodash';
const debug = require('debug')('app:store:invitation');

export default createStore({
    storeName: 'InvitationStore',
    handlers: {
        RECEIVE_INVITATION: 'receiveInvitation'
    },

    initialize: function () {
        this._invitation = {};
    },

    receiveInvitation: function (invitation) {
        debug('Received invitation', invitation);
        _.merge(this._invitation, invitation);

        this.emitChange();
    },

    getUsername: function () {
        return this._invitation.username;
    },

    getInvitation: function () {
        return this._invitation;
    },

    dehydrate: function () {
        return this.getInvitation()
    },

    rehydrate: function (state) {
        this._invitation = state;
    }
});