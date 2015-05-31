'use strict';

import React from 'react';
import {Link} from 'react-router'

export default class Navigation extends React.Component {
    render () {
        return (
            <nav>
                <Link to="venue" className="text-blue--hover text-blue--active">Venue</Link>
                <Link to="accommodation" className="text-green--hover text-green--active">Accommodation</Link>
                <Link to="invitation">My Invitation</Link>
                <Link to="gifts" className="text-yellow--hover text-yellow--active">Gifts</Link>
                <Link to="other" className="text-red--hover text-red--active">Other Info</Link>
            </nav>
        );
    }
}

Navigation.contextTypes = {
    router: React.PropTypes.func
};