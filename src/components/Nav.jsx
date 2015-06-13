'use strict';

import React from 'react';
import {Link} from 'react-router'
import classnames from 'classnames';

export default class Navigation extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            showStack: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            showStack: !this.state.showStack
        });
    }

    render () {
        let items = (
            <div className="nav__items">
                 <div className="row">
                    <div className="four columns">
                        <Link to="venue" className="text-blue--hover text-blue--active">Venue</Link>
                    </div>
                    <div className="four columns">
                        <Link to="gifts" className="text-yellow--hover text-yellow--active">Gifts</Link>
                    </div>
                    <div className="four columns">
                        <Link to="other" className="text-red--hover text-red--active">P.S.</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <Link to="accommodation" className="text-green--hover text-green--active">Accommodation</Link>
                    </div>
                    <div className="six columns">
                    <Link to="invitation">My Invitation</Link>
                    </div>
                </div>
            </div>
        );

        const stackClass = classnames({
            'nav--stack': true,
            'nav--stack--show': this.state.showStack
        });

        return (
            <nav>
                <div className="nav--full">
                    <Link to="venue" className="text-blue--hover text-blue--active">Venue</Link>
                    <Link to="accommodation" className="text-green--hover text-green--active">Accommodation</Link>
                    <Link to="invitation">My Invitation</Link>
                    <Link to="gifts" className="text-yellow--hover text-yellow--active">Gifts</Link>
                    <Link to="other" className="text-red--hover text-red--active">P.S.</Link>
                </div>
                <div className="nav--groups">
                    {items}
                </div>
                <div className={stackClass}>
                    <div className="nav__toggle row">
                        <div className="twelve columns">
                            <a onClick={this.toggle}>{this.state.showStack ? 'Hide' : 'Menu'}</a>
                        </div>
                    </div>
                    {items}
                </div>
            </nav>
        );
    }
}

Navigation.contextTypes = {
    router: React.PropTypes.func
};