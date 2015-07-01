'use strict';

import React from 'react';
import _ from 'lodash';
import updateInvitation from '../../../actions/updateInvitation';

export default class Arrival extends React.Component {
    render() {
        let dayArrival;

        if (this.props.invitation.isDay) {
            dayArrival = <h4 className="text--center"><strong>12.30pm</strong> for a <strong>1.30pm</strong> ceremony</h4>;
        }

        return (
            <div className="row">
                <div className="twelve columns">
                    <h2>Arrival</h2>
                </div>
                <div className="twelve columns invitation__arrival">
                    {dayArrival}
                    <h4 className="text--center"><strong>7-7.30pm</strong> for a drink with the Bride and Groom</h4>
                </div>
            </div>
        );
    }
}