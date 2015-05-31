'use strict';

import React from 'react';

export default class Html extends React.Component {
    render() {
        return (
            <html>
            <head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"/>
            <link rel="stylesheet" href="/index.css"/>
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: 'window.App=' + this.props.state + ';'}}></script>
            <script src="/bundle.js"></script>
            </html>
        );
    }
}