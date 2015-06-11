'use strict';

const debug = require('debug')('app:service:invitations');
import request from 'superagent';

export default class InvitationService {
    constructor(uri, apiKey, database, collection) {
        this._uri = uri;
        this._apiKey = apiKey;
        this._database = database;
        this._collection = collection;
    }

    buildRequest() {
        let url = this._uri+'/databases/'+this._database+'/collections/'+this._collection;
        return request.get(url).accept('json').query({apiKey: this._apiKey});
    }

    findOne(query, done) {
        this.buildRequest().query({q: JSON.stringify(query), fo: true}).end((err, res) => {
            if (err) {
                debug(err);
                return done(err);
            }

            done(null, res.body);
        });
    }
}