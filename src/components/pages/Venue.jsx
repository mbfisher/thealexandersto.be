'use strict';

import React from 'react';

export default class Venue extends React.Component {
    render() {
        return (
            <div className="page page--venue">
                <h1 className="page__title">Venue</h1>
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <h2 className="text-blue"><a href="http://www.dodfordmanor-venue.co.uk/" target="_black">
                                Dodford Manor, Dodford, Northamptonshire</a></h2>
                        </div>
                        <div className="twelve columns dodford-layout">
                            <img src="/dodford.png"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}