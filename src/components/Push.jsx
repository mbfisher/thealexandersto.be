'use strict';

import React from 'react';
import {connectToStores} from 'fluxible/addons';
import PushStore from '../stores/PushStore';

class Push extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: null
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.context.getStore(PushStore).addChangeListener(this.onChange);
    }
    componentWillUnmount() {
        this.context.getStore(PushStore).removeChangeListener(this.onChange);
    }

    onChange() {
        let content, isError;
        const store = this.context.getStore(PushStore);

        if (store.hasError()) {
            isError = true;
            content = store.getError().message;
        } else if (store.isPushing()) {
            content = 'Saving...';
        } else if (store.hasLastPush()) {
            content = 'Saved at ' + store.getLastPushTime().format('HH:mm');

            setTimeout(() => {
                this.setState({
                    visible: false
                });
            }, 2000);
        }

        this.setState({
            content: content,
            visible: !!content,
            isError: isError
        });
    }

    render() {
        return (
            <div className="push" style={{opacity: this.state.visible ? '0.9' : '0'}}>{this.state.content}</div>
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