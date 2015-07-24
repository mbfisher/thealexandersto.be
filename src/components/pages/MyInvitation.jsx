'use strict';

import React from 'react'
import _ from 'lodash';
import updateInvitation from '../../actions/updateInvitation';
import RSVP from './invitation/RSVP';
import Arrival from './invitation/Arrival';
import Food from './invitation/Food';
import Venue from './invitation/Venue';

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
                        <span className="date">Monday 21st September 2015</span>
                    </div>
                </div>
                <hr/>
                <div className="row invitation__rsvp">
                    <div className="twelve columns">
                        <h2>My Invitation</h2>
                    </div>
                    <div className="twelve columns">
                        <p>Welcome to your invitation to our wedding! There's a few things for you to fill in. Everything will
                        be saved automatically as you go - a notification will appear to let you know
                        your changes have been saved. Once you've filled everything in you can close the window. Please come back any time
                        for information and if you need any help get in touch!</p>
                        <p className="text--center">We can't wait to see you,</p>
                        <p className="text--center">Sarah &amp; Ross xx</p>
                    </div>
                </div>
                <hr/>
                <RSVP invitation={this.props.invitation}/>
                <hr/>
                <Arrival invitation={this.props.invitation}/>
                <hr/>
                <Venue invitation={this.props.invitation}/>
                <hr/>
                <Food invitation={this.props.invitation}/>
            </div>
        );
    }
}

MyInvitation.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default MyInvitation;
