'use strict';

import React from 'react';
import _ from 'lodash';
import updateInvitation from '../../../actions/updateInvitation';

class Food extends React.Component {
    render() {
        if (this.props.invitation.rsvp === undefined || !this.props.invitation.rsvp.length) {
            return false;
        }

        const inputs = _.map(this.props.invitation.rsvp || [], (guest, i) => {
            const food = this.props.invitation.food ? this.props.invitation.food[guest] : null;

            return (
                <div key={'food'+i} className="six columns">
                    <label>{guest}</label>
                    <input type="text" className="u-full-width" placeholder="Enter any dietary requirements here" onChange={this.onChange.bind(this, guest)} defaultValue={food}/>
                </div>
            );
        });

        return (
            <div className="row">
                <div className="twelve columns">
                    <h2>Food</h2>
                </div>
                <div className="text columns">
                    <p>We have an awesome assortment of food for you to enjoy throughout the day, but appreciate some
                        of you may have dietary restrictions. Please let us know so we can accommodate you as best as
                        possible.</p>
                </div>
                <form><div className="row">{inputs}</div></form>
            </div>
        );
    }

    onChange(guest, event) {
        const food = this.props.invitation.food || {};
        food[guest] = event.target.value;
        this.context.executeAction(updateInvitation, {food: food});
    }
}

Food.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default Food;