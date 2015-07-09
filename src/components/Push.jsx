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
        this.close = this.close.bind(this);
    }

    componentDidMount() {
        this.context.getStore(PushStore).addChangeListener(this.onChange);
    }
    componentWillUnmount() {
        this.context.getStore(PushStore).removeChangeListener(this.onChange);
    }

    close() {
        this.setState({
            visible: false
        });
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
            content = <div>Saved at {store.getLastPushTime().format('HH:mm')} <span className="push__close"><a onClick={this.close}>&times;</a></span></div>;
        }

        this.setState({
            content: content,
            visible: !!content,
            isError: isError
        });
    }

    render() {
        return (
            <div className="push" style={{opacity: this.state.visible ? '0.9' : '0'}}>
                {this.state.content}
            </div>
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