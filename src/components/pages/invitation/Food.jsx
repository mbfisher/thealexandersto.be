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
                    <input type="text" className="u-full-width" placeholder="Enter any dietary requirements here" onChange={this.onDietChange.bind(this, guest)} defaultValue={food}/>
                </div>
            );
        });

        return (
            <div className="row">
                <div className="twelve columns">
                    <h2>Food</h2>
                </div>
                <div className="twelve columns">
                    <p>We have an awesome assortment of food for you to enjoy throughout the day, but appreciate some
                        of you may have dietary restrictions. Please let us know so we can accommodate you as best as
                        possible.</p>
                </div>
                <form ref="form">
                    <div className="row">{inputs}</div>
                    <div className="row">
                        <div className="twelve columns">
                            <h3 style={{textAlign: 'center'}}>Breakfast</h3>
                        </div>
                        <div className="twelve columns">
                            <p>We have booked a private room for breakfast at Staverton the following morning; would you
                                like to join us?</p>
                        </div>
                    </div>
                    <div className="row breakfast">
                        <div className="six columns breakfast__option">
                            <label>
                                <input type="radio" name="breakfast" value="1" defaultChecked={this.props.invitation.breakfast} onChange={this.onBreakfastChange.bind(this)}/>
                                <h5 className="label-body">Yes please!</h5>
                            </label>
                        </div>
                        <div className="six columns breakfast__option">
                            <label>
                                <input type="radio" name="breakfast" value="0" defaultChecked={this.props.invitation.breakfast !== undefined && !this.props.invitation.breakfast} onChange={this.onBreakfastChange.bind(this)}/>
                                <h5 className="label-body">No thanks</h5>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    onDietChange(guest, event) {
        const food = this.props.invitation.food || {};
        food[guest] = event.target.value;
        this.context.executeAction(updateInvitation, {food: food});
    }

    onBreakfastChange() {
        const value = this.refs.form.getDOMNode().elements.breakfast.value === "1";
        this.context.executeAction(updateInvitation, {breakfast: value});
    }
}

Food.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default Food;