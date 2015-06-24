'use strict';

import React from 'react';
import {connectToStores} from 'fluxible/addons';
import loginAction from '../actions/login';
import loadingAction from '../actions/loading';
import ErrorStore from '../stores/ErrorStore';
import LoadingStore from '../stores/LoadingStore';
import classnames from 'classnames';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.context.executeAction(loadingAction, {
            action: loginAction,
            payload: {
                username: this.refs.username.getDOMNode().value
            }
        });
    }

    render() {
        const inputClass = classnames({
            'u-full-width': true,
            error: this.props.error
        });

        const loginButton = this.props.isLoading ? <img src="/loading.svg" width="30px" style={{padding: "0 5px"}}/> : 'Login';

        return (
            <div className="login container" style={{maxWidth: '480px'}}>
                <div className="intro">
                    <div className="row">
                        <div className="intro__title twelve columns text-blue"><h1>Alexander Wedding</h1></div>
                    </div>
                    <div className="row">
                        <div className="intro__date four columns text-red"><h2>21</h2></div>
                        <div className="intro__date four columns text-green"><h2>09</h2></div>
                        <div className="intro__date four columns text-yellow"><h2>15</h2></div>
                    </div>
                </div>

                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="nine columns">
                            <input type="text" ref="username" className={inputClass} placeholder="Enter your username"/>
                        </div>
                        <div className="three columns">
                            <button type="submit">{loginButton}</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

Login.contextTypes = {
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};

export default connectToStores(Login, [ErrorStore, LoadingStore], (stores, props) => {
    return {
        error: stores.ErrorStore.isLoginError(),
        isLoading: stores.LoadingStore.isLoading()
    };
});