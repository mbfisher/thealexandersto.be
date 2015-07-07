'use strict';

import React from 'react';

export default class Photos extends React.Component {
    render() {
        return (
            <div className="page page--photos">
                <h1 className="page__title">Photos</h1>
                <div className="container">
                    <div className="row">
                        <div className="twelve columns">
                            <p className="poem">
                                This is a poem to tell everyone,<br/>
                                How to share their photos,<br/>
                                They'll need to use technology,<br/>
                                Flip flop hammer mementos
                            </p>
                            <p>Here is the <a href="https://www.wedpics.com/" target="_blank">website</a>.</p>
                            <ul>
                                <li>Instructions/link to docs?</li>
                                <li>Links to app downloads?</li>
                                <li>Credentials/identifiers?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}