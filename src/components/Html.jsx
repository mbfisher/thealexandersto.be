'use strict';

import React from 'react';

export default class Html extends React.Component {
    render() {
        return (
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"/>
            <link rel="stylesheet" href="/index.css"/>
            <title>thealexandersto.be</title>
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: 'window.App=' + this.props.state + ';'}}></script>
            <script src="https://cdn.firebase.com/js/client/2.2.6/firebase.js"></script>
            <script src="/bundle.js"></script>
            </html>
        );
    }
}