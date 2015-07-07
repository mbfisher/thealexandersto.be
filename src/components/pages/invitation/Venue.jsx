'use strict';

import React from 'react';

export default class Venue extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="twelve columns">
                    <h2>Venue</h2>
                    <h3 className="text--center"><a className="text-blue text-hover--green" href="http://www.dodfordmanor-venue.co.uk/" target="_black">
                        Dodford Manor, Dodford, Northamptonshire</a></h3>
                    <h5 className="text--center">Exclusive Country House &amp; Barn Wedding Venue</h5>
                </div>
                <div className="twelve columns dodford-layout">
                    <img src="/dodford.png"/>
                </div>
            </div>
        );
    }
}