'use strict';

import React from 'react'

export default class MyInvitation extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="twelve columns">
                        <h1 className="text page-title">My Invitation</h1>
                    </div>
                </div>
                <div className="row greeting">
                    <div className="twelve columns">
                        <span className="text-blue">Beautiful Bride</span><br/>
                        <span className="text-green">Handsome Groom</span><br/>
                        <span className="text-yellow">Booze, food & bad dance moves</span><br/>
                        <span className="text-red"><strong>You in or what?</strong></span><br/>
                    </div>
                </div>
            </div>
        );
    }
}