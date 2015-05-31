'use strict';

import React from 'react';
import {provideContext} from 'fluxible/addons';
import login from '../actions/login';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.context.executeAction(login, {
            username: this.refs.username.getDOMNode().value
        });
    }

    render() {
        return (
            <div className="login container" style={{maxWidth: '480px'}}>
                <div className="row greeting">
                    <div className="twelve columns">
                        <p className="text-blue">Beautiful Bride</p>
                        <p className="text-green">Handsome Groom</p>
                        <p className="text-yellow">Booze, food &<br/>bad dance moves</p>
                        <p className="text-red"><strong>You in or what?</strong></p>
                    </div>
                </div>

                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="ten columns">
                            <input type="text" ref="username" className="u-full-width" placeholder="Enter your username"/>
                        </div>
                        <div className="two columns">
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

Login.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

export default Login;