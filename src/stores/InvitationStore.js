'use strict';

import {createStore} from 'fluxible/addons';

export default createStore({
    storeName: 'InvitationStore',
    handlers: {
        RECEIVE_INVITATION: 'receiveInvitation'
    },

    initialize: function () {
        this.username = null;
    },

    receiveInvitation: function (invitation) {
        this.username = invitation.username;

        this.emitChange();
    },

    getUsername: function () {
        return this.username;
    }
});