'use strict';

import React from 'react';
import {provideContext, connectToStores} from 'fluxible/addons';
import {RouteHandler} from 'react-router'
import Nav from './Nav'
import Login from './Login';

import InvitationStore from '../stores/InvitationStore';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    render() {
        var content;

        if (!this.props.isLoggedIn) {
            content = <Login/>;
        } else {
            content = (
                <div>
                    <Nav/>
                    <RouteHandler/>
                </div>
            );
        }

        return content;
    }
}

Application.propTypes = {
    isLoggedIn: React.PropTypes.bool.isRequired
};

export default provideContext(connectToStores(Application, [InvitationStore], (stores) => {
    return {
        isLoggedIn: !!stores.InvitationStore.getUsername()
    };
}));