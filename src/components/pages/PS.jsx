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
                                <h3>Music</h3>
                                <p>The evening DJ won't take requests on the night - if there's a tune you want to hear you need to sign in
                                    to <a href="http://www.1entertainments.djintelligence.com/request/" target="_blank">this website</a> using the
                                    details below. Get it done!</p>
                                <p><strong>Username:</strong> alexanderwedding<br/><strong>Password:</strong> wedding</p>
                                <hr/>
                                <h3>Taxis</h3>
                                <p>There will be a taxi rank running from Dodford throughout the evening, more so when
                                the bar closes at 11pm.</p>
                                <hr/>
                            </div>
                            <div>
                                <h3>Parking</h3>
                                <p>If you park your car at Dodford and then get a taxi to your hotel please note that
                                    all cars must be collected by <strong>11am</strong> on the following morning.</p>
                                <hr/>
                            </div>
                            <div className="venue__map">
                                <h3>Map</h3>
                                <iframe width="100%" height="450" frameBorder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?q=Dodford%20Manor%20Exclusive%20Use%20Country%20House%20Barn%20Wedding%20Venue%2C%20Main%20Street%2C%20Northampton%2C%20United%20Kingdom&key=AIzaSyDB5RIsuYqfRLadiXnhvkbHA_RUbKtyIN4"></iframe>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}