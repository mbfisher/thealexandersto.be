'use strict';

import React from 'react';
import updateInvitation from '../../actions/updateInvitation';

class Accommodation extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div className="page page--accommodation">
                <h1 className="page__title">Accommodation</h1>
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <p>
                                We have reserved a number of rooms at the <a href="http://www.deverevenues.co.uk/en/venues/staverton-park?gclid=CPLr65DD0MUCFakKwwod8roAzQ" target="_blank">Staverton Park Hotel</a>,
                                where we are staying. The rooms are &pound;82.95 for a double (including breakfast). Rooms are available
                                on a first come first serve basis, please let us know how many rooms you would like to reserve.
                                Staverton is 7 minutes’ drive from our wedding venue.
                            </p>
                        </div>
                        <form>
                            <div className="row">
                                <div className="four columns">
                                    <label>Single</label>
                                    <select ref="single" className="u-full-width" onChange={this.onChange}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                                <div className="four columns">
                                    <label>Double</label>
                                    <select ref="double" className="u-full-width" onChange={this.onChange}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                                <div className="four columns">
                                    <label>Family</label>
                                    <select ref="family" className="u-full-width" onChange={this.onChange}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className="twelve columns">
                            <p>If you would like to stay at another hotel there are a number of others available to you:</p>
                            <ul>
                                <li><a href="http://www.premierinn.com/" target="_blank">Premier Inn, Weedon Bec</a> (3 minutes drive)</li>
                                <li><a href="http://www.hinorthamptonwest.co.uk/" target="_blank">Holiday Inn, Northampton West</a> (6 minutes drive)</li>
                                <li><a href="http://www.marriott.co.uk/hotels/travel/ormnh-northampton-marriott-hotel/">Courtyard by Marriott Daventry</a> (6 minutes drive)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onChange() {
        this.context.executeAction(updateInvitation, {
            accommodation: {
                single: this.refs.single.getDOMNode().value,
                double: this.refs.double.getDOMNode().value,
                family: this.refs.family.getDOMNode().value
            }
        });
    }
}

Accommodation.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default Accommodation;