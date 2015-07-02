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
                    <div className="row">
                        <div className="twelve columns">
                            <p>Say something about the venue here!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="twelve columns venue__map">
                            <iframe width="100%" height="450" frameBorder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?q=Dodford%20Manor%20Exclusive%20Use%20Country%20House%20Barn%20Wedding%20Venue%2C%20Main%20Street%2C%20Northampton%2C%20United%20Kingdom&key=AIzaSyDB5RIsuYqfRLadiXnhvkbHA_RUbKtyIN4"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}