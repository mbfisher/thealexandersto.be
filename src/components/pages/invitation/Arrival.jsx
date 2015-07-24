'use strict';

import React from 'react';
import _ from 'lodash';
import updateInvitation from '../../../actions/updateInvitation';

export default class Arrival extends React.Component {
    render() {
        let arrival;

        if (this.props.invitation.isDay) {
            arrival = <span><strong>12.30pm</strong> for a <strong>1.30pm</strong> ceremony</span>;
        } else {
            arrival = <span><strong>7-7.30pm</strong> for a drink with the Bride and Groom</span>;
        }

        return (
            <div className="row">
                <div className="twelve columns">
                    <h2>Arrival</h2>
                </div>
                <div className="twelve columns invitation__arrival">
                    <h4 className="text--center">{arrival}</h4>
                </div>
            </div>
        );
    }
}
