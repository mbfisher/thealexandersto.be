'use strict';

import React from 'react';
import _ from 'lodash';
import updateInvitation from '../../../actions/updateInvitation';

class RSVP extends React.Component {
    render() {
        const rsvp = this.props.invitation.rsvp || [];
        const guests = this.props.invitation.guests;

        const checkboxes = _.map(guests, (guest, i) => {
            const isAttending = rsvp.indexOf(guest) > -1;

            return (
                <li key={'rsvp-'+i}>
                    <label>
                        <input ref="rsvp" type="checkbox" checked={isAttending} onChange={this.onChange.bind(this, guest)}/>
                        <h5 className="label-body">{guest}</h5>
                    </label>
                </li>
            );
        });

        return (
            <div className="row invitation__rsvp">
                <div className="twelve columns">
                    <h2>RSVP</h2>
                </div>
                <form>
                    <div className="row">
                        <div className="twelve columns">
                            <p className="text--center">Tick the boxes to tell us who's coming.</p>
                        </div>
                        <div className="twelve columns">
                            <ul>{checkboxes}</ul>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    onChange(guest) {
        let rsvp = this.props.invitation.rsvp || [];

        if (rsvp.indexOf(guest) > -1) {
            rsvp = _.pull(rsvp, guest);
        } else {
            rsvp.push(guest);
        }

        this.context.executeAction(updateInvitation, {rsvp: rsvp});
    }
}

RSVP.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default RSVP;