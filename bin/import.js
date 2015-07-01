'use strict';

import parse from 'csv-parse';
import fs from 'fs';
import InvitationService from '../src/services/Invitations';
import async from 'async';

const service = InvitationService.create();

parse(fs.readFileSync(process.argv[2]).toString(), {columns: true}, (err, invitations) => {
    async.each(invitations, (row, done) => {
        row.guests = row.guests.split(/,\s/);
        row.isDay = row.isDay === 'Y';

        service.create(row, (err, response) => {
            console.log(response.status, response.body);

            if (err) {
                return done(err);
            }

            if (!response.ok) {
                return done(new Error(response));
            }

            done();
        });
    }, (err) => {
        if (err) {
            console.error(err);
        }
    });
});