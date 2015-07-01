'use strict';

const debug = require('debug')('app:service:invitations');
import request from 'superagent';
import _ from 'lodash';

export default class InvitationService {
    constructor(uri, apiKey, database, collection) {
        this._uri = uri;
        this._apiKey = apiKey;
        this._database = database;
        this._collection = collection;
    }

    static create() {
        return new InvitationService(
            'https://api.mongolab.com/api/1',
            'N0l-xslNc1S0J9aN4LFSLrL9h-Z0blV_',
            'heroku_nvq1vjmd',
            'invitations'
        );
    }

    findOne(query, done) {
        let url = this._uri+'/databases/'+this._database+'/collections/'+this._collection;
        request.get(url).accept('json').query({apiKey: this._apiKey, q: JSON.stringify(query), fo: true}).end((err, res) => {
            if (err) {
                debug(err);
                return done(err);
            }

            done(null, res.body);
        });
    }

    create(invitation, done) {
        let url = this._uri+'/databases/'+this._database+'/collections/'+this._collection;
        request.post(url).accept('json').query({apiKey: this._apiKey}).send(invitation).end(done);
    }

    update(invitation, done) {
        debug('Updating invitation', invitation);
        invitation = _.clone(invitation);

        let url = this._uri+'/databases/'+this._database+'/collections/'+this._collection+'/'+invitation._id['$oid'];

        request.put(url).accept('json').query({apiKey: this._apiKey}).send(invitation).end(done);
    }

}