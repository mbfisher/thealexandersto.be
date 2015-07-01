'use strict';

import React from 'react';
import classnames from 'classnames';
import Headroom from 'react-headroom';

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
                        <a href="#venue" className="text-blue--hover text-blue--active">Venue</a>
                    </div>
                    <div className="four columns">
                        <a href="#gifts" className="text-yellow--hover text-yellow--active">Gifts</a>
                    </div>
                    <div className="four columns">
                        <a href="#ps" className="text-red--hover text-red--active">P.S.</a>
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <a href="#accommodation" className="text-green--hover text-green--active">Accommodation</a>
                    </div>
                    <div className="six columns">
                        <a href="#invitation">My Invitation</a>
                    </div>
                </div>
            </div>
        );

        const stackClass = classnames({
            'nav--stack': true,
            'nav--stack--show': this.state.showStack
        });

        return (
            <Headroom>
                <nav>
                    <div className="nav--full">
                        <a href="#venue" className="text-blue--hover text-blue--active">Venue</a>
                        <a href="#accommodation" className="text-green--hover text-green--active">Accommodation</a>
                        <a href="#invitation">My Invitation</a>
                        <a href="#gifts" className="text-yellow--hover text-yellow--active">Gifts</a>
                        <a href="#ps" className="text-red--hover text-red--active">P.S.</a>
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
            </Headroom>
        );
    }
}