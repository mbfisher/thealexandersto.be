'use strict';

import InvitationStore from '../stores/InvitationStore';
import moment from 'moment';

let timeout;

export default function updateInvitation(context, payload, done) {
    context.dispatch('RECEIVE_INVITATION', payload);

    if (timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
        const invitation = context.getStore(InvitationStore).getInvitation();

        context.dispatch('PUSH_START', {invitation: invitation, timestamp: momemnt()});

        context.invitations.update(invitation, (err, done) => {
            if (err) {
                return context.dispatch('PUSH_ERROR', {invitation: invitation, error: err});
            }

            context.dispatch('PUSH_DONE', {invitation: invitation, timestamp: moment()});
        });
    }, 2000);

    done();
}