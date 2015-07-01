'use strict';

import React from 'react';

export default class PS extends React.Component {
    render() {
        return (
            <div className="page page--ps">
                <h1 className="page__title">P.S.</h1>
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <div>
                                <h3>Taxis</h3>
                                <p>There will be a taxi rank running from Dodford throughout the evening, more so when
                                the bar closes at 11pm.</p>
                                <hr/>
                            </div>
                            <div>
                                <h3>Parking</h3>
                                <p>If you park your car at Dodford and then get a taxi to your hotel please note that
                                    all cars must be collected by 11am on the following morning.</p>
                                <hr/>
                            </div>
                            <div>
                                <h3>Breakfast</h3>
                                <p>We have booked a private room for breakfast the following morning, if you are not
                                    staying at Staverton and wish to meet us all for breakfast please let us know.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}