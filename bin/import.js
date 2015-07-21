'use strict';

import parse from 'csv-parse';
import fs from 'fs';
import InvitationService from '../src/services/Invitations';
import async from 'async';
import _ from 'lodash';
import readline from 'readline';
import diff from 'deep-diff';

const service = InvitationService.create();

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const replace = process.argv[3] !== undefined && process.argv[3] === '--replace';

parse(fs.readFileSync(process.argv[2]).toString(), {columns: true}, (err, invitations) => {
    let operation = replace ? 'each' : 'eachSeries';

    async[operation](invitations, (row, done) => {
        row.guests = _.map(row.guests.split(/,\s/), (guest) => {
            return guest.trim();
        });
        row.rsvp = row.rsvp ? _.map(row.rsvp.split(/,\s/), (guest) => {
            return guest.trim();
        }) : [];
        row.food = parseFood(row.food);
        row.isDay = row.isDay === 'Y';
        row.accommodation = {
            single: row.single,
            double: row.double,
            family: row.family
        };
        row.breakfast = row.breakfast === 'Y';
        delete row.single;
        delete row.double;
        delete row.family;

        service.findOne({username: row.username}, (err, result) => {
            if (err) {
                return done(err);
            }

            if (!result) {
                console.log('Creating invitation for ' + row.username);

                service.create(row, (err, response) => {
                    if (err) {
                        return done(err);
                    }

                    if (!response.ok) {
                        return done(new Error(response));
                    }

                    done();
                });
            } else {
                if (replace) {
                    console.log('Overwriting data for ' + row.username);
                    row._id = result._id;
                    service.update(row, done);
                    return;
                }
                const current = _.omit(result, (value, key) => {
                    return key === '_id';
                });

                const next = row;
                const _diff = diff(current, next);

                if (_diff) {
                    const merged = _.merge({}, current, next);

                    console.log('Existing invitation found:');
                    console.log('--- DIFF ---');
                    console.log(_diff);
                    console.log('--- CURRENT ---');
                    console.log(current);
                    console.log('--- NEXT ---')
                    console.log(next);
                    console.log('--- MERGED ---')
                    console.log(merged);

                    rl.question("Continue? [Y/n] ", function(answer) {
                        if (answer === 'y' || answer === 'Y' || answer === '') {
                            merged._id = result._id;
                            service.update(merged, done);
                        } else {
                            done();
                        }
                    });
                } else {
                    console.log('No update required for ' + row.username);
                    done();
                }
            }
        });

    }, (err) => {
        if (err) {
            console.error(err);
        }

        rl.close();
    });
});

function parseFood(string) {
    const result = {};

    const parts = string.split(', ');
    _.each(string.split(', '), (part, i) => {
        if (parts[i+1] && !parts[i+1].match(/^[A-z]+\s*:/)) {
            part += ', ' + parts[i+1];
            delete parts[i+1];
        }
        const match = part.match(/^([A-z]+)\s*: (.+)$/);
        if (match) {
            result[match[1].trim()] = match[2];
        }
    });

    return result;
}
