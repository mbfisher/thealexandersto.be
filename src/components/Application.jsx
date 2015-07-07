'use strict';

import React from 'react';
import {provideContext, connectToStores} from 'fluxible/addons';
import Nav from './Nav'
import Login from './Login';
import MyInvitation from './pages/MyInvitation';
import Photos from './pages/Photos';
import Accommodation from './pages/Accommodation';
import Gifts from './pages/Gifts';
import PS from './pages/PS';
import Push from './Push';

import InvitationStore from '../stores/InvitationStore';

const debug = require('debug')('app:component:application');

class Application extends React.Component {
    render() {
        var content;

        if (!this.props.isLoggedIn) {
            content = <Login/>;
        } else {
            content = (
                <div>
                    <Nav/>
                    <div className="content">
                        <div id="invitation"><MyInvitation invitation={this.props.invitation}/></div>
                        <div id="accommodation"><Accommodation invitation={this.props.invitation}/></div>
                        <div id="photos"><Photos invitation={this.props.invitation}/></div>
                        <div id="gifts"><Gifts invitation={this.props.invitation}/></div>
                        <div id="ps"><PS invitation={this.props.invitation}/></div>
                    </div>
                    <Push/>
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
        isLoggedIn: !!stores.InvitationStore.getUsername(),
        invitation: stores.InvitationStore.getInvitation()
    };
}));