'use strict';

import React from 'react';
import {connectToStores} from 'fluxible/addons';
import PushStore from '../stores/PushStore';

class Push extends React.Component {
    render() {
        let content, isError, shouldShow;
        const store = this.context.getStore(PushStore);

        if (store.hasError()) {
            shouldShow = true;
            isError = true;
            content = store.getError().message;
        } else if (store.isPushing()) {
            shouldShow = true;
            content = 'Saving...';
        } else if (store.hasLastPush()) {
            content = 'Saved at ' + store.getLastPushTime().format('HH:mm');
        }

        /*if (!shouldShow) {
            return false;
        }*/

        return (
            <div className="push">PUSH: {content}</div>
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