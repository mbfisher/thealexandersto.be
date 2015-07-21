'use strict';

import parse from 'csv-parse';
import stringify from 'csv-stringify';
import fs from 'fs';
import InvitationService from '../src/services/Invitations';
import async from 'async';
import _ from 'lodash';

const service = InvitationService.create();

parse(fs.readFileSync(process.argv[2]).toString(), {columns: true}, (err, data) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    //console.log(data);

    service.all((err, invitations) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        _.each(invitations, (invitation) => {
            const record = _.findIndex(data, {username: invitation.username});

            data[record] = {
                username: invitation.username,
                guests: invitation.guests.join(', '),
                email: invitation.email,
                isDay: invitation.isDay ? 'Y' : 'N',
                rsvp: invitation.rsvp ? invitation.rsvp.join(', ') : null,
                food: invitation.food ? _.reduce(invitation.food, (result, v, k) => {
                    result.push(k + ': ' + v);
                    return result;
                }, []).join(', ') : null,
                breakfast: invitation.breakfast !== undefined ? invitation.breakfast ? 'Y' : 'N' : null,
                single: invitation.accommodation ? invitation.accommodation.single : null,
                double: invitation.accommodation ? invitation.accommodation.double : null,
                family: invitation.accommodation ? invitation.accommodation.family : null
            };
        });

        stringify(data, {header: true}).pipe(fs.createWriteStream(process.argv[2]));
    });
});