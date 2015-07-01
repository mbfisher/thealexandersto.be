'use strict';

import React from 'react';
import {connectToStores} from 'fluxible/addons';
import PushStore from '../stores/PushStore';

class Push extends React.Component {
    render() {
        return (
            <div className="push">PUSH</div>
        );
    }
}

Push.contextTypes = {
    getStore: React.PropTypes.func.isRequired
};

Push = connectToStores(Push, [PushStore], (stores) => {
    return {};
});

export default Push;