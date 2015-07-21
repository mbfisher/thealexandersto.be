'use strict';

import React from 'react';
import updateInvitation from '../../actions/updateInvitation';

class Accommodation extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    render() {
        const accommodation = this.props.invitation.accommodation || {};
        let selectRooms, others = 'There are number of hotels nearby available for you to stay in';

        if (this.props.invitation.isDay) {
            others = 'If you would like to stay at another hotel there are a number of others available to you';
            selectRooms = (
                <div className="row">
                    <div className="twelve columns">
                        <p>
                            We have reserved a number of rooms at the <a href="http://www.deverevenues.co.uk/en/venues/staverton-park?gclid=CPLr65DD0MUCFakKwwod8roAzQ" target="_blank">Staverton Park Hotel</a>,
                            where we are staying. The rooms are &pound;82.95 for a double (including breakfast). Rooms are available
                            on a first come first serve basis, please let us know how many rooms you would like to reserve.
                            Staverton is 7 minutes drive from our wedding venue.
                        </p>
                    </div>
                    <form>
                        <div className="row">
                            <div className="four columns">
                                <label>Single</label>
                                <select ref="single" className="u-full-width" onChange={this.onChange} defaultValue={accommodation.single}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div className="four columns">
                                <label>Double</label>
                                <select ref="double" className="u-full-width" onChange={this.onChange} defaultValue={accommodation.double}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <div className="four columns">
                                <label>Family</label>
                                <select ref="family" className="u-full-width" onChange={this.onChange} defaultValue={accommodation.family}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }

        return (
            <div className="page page--accommodation">
                <h1 className="page__title">Accommodation</h1>
                <div className="container">
                    {selectRooms}
                    <div className="row">
                        <div className="twelve columns">
                            <p className="text--center">{others}:</p>
                        </div>
                    </div>
                    <div className="row accommodation__hotels">
                        <div className="four columns accommodation__hotel accommodation__hotels__premier">
                            <h5>Premier Inn</h5>
                            <h6>Weedon Bec</h6>
                            <a href="http://www.premierinn.com/" target="_blank" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/4/4f/Premier_Inn_logo.jpg)'}}></a>
                            <p>3 minutes drive</p>
                        </div>
                        <div className="four columns accommodation__hotel accommodation__hotels__holiday">
                            <h5>Holiday Inn</h5>
                            <h6>Northampton West</h6>
                            <a href="http://www.hinorthamptonwest.co.uk/" target="_blank" style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Holiday_Inn_Logo.svg/1024px-Holiday_Inn_Logo.svg.png)'}}></a>
                            <p>6 minutes drive</p>
                        </div>
                        <div className="four columns accommodation__hotel accommodation__hotels__marriott">
                            <h5>Marriott</h5>
                            <h6>Daventry</h6>
                            <a href="http://www.marriott.co.uk/hotels/travel/ormnh-northampton-marriott-hotel/" target="_blank" style={{backgroundImage: 'url(http://cache.marriott.com/propertyimages/brandgeneric/mc/mc_logo_L.png)'}}></a>
                            <p>6 minutes drive</p>
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