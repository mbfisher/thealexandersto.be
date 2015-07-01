'use strict';

import React from 'react'
import _ from 'lodash';
import updateInvitation from '../../actions/updateInvitation';
import RSVP from './invitation/RSVP';
import Arrival from './invitation/Arrival';
import Food from './invitation/Food';

class MyInvitation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row invitation__greeting">
                    <div className="twelve columns">
                        <span className="text-blue">Beautiful Bride</span><br/>
                        <span className="text-green">Handsome Groom</span><br/>
                        <span className="text-yellow">Booze, food &amp; bad dance moves</span><br/>
                        <span className="text-red"><strong>You in or what?</strong></span><br/>
                    </div>
                </div>
                <Arrival invitation={this.props.invitation}/>
                <RSVP invitation={this.props.invitation}/>
                <Food invitation={this.props.invitation}/>
            </div>
        );
    }
}

MyInvitation.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default MyInvitation;