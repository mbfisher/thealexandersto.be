'use strict';

import React from 'react';

export default class Gifts extends React.Component {
    render() {
        return (
            <div className="page page--gifts">
                <h1 className="page__title">Gifts</h1>
                <div className="container"><div className="row"><div className="twelve columns">
                    <p className="poem">
                        If you're thinking of giving us a gift,<br/>
                        to help us on our way,<br/>
                        a gift of cash towards our honeymoon,<br/>
                        would really make our day.
                    </p>

                    <p className="poem">
                        Then while we're relaxing on the beach,<br/>
                        or by the pool so blue,<br/>
                        we'll sit back and know that,<br/>
                        it is truly thanks to you!
                    </p>

                    <p>We have booked our flights to Thailand where we will spend three weeks at Christmas and New Year
                    2015 traveling around the Surat Thani islands, in the South of the country. To give you an idea of
                    what your kind contribution would fund, we have listed some of our hopes and wishes below.</p>

                    <p><ul>
                        <li><strong>&pound;25</strong> would pay for a night at <i>The Great Escape Chalets</i> on Koh Phangan</li>
                        <li><strong>&pound;40</strong> would pay for a <i>3 course dinner and drinks</i> on the Khao San Road in Bangkok</li>
                        <li><strong>&pound;45</strong> would pay for us to relax in the Birmingham Airport <i>lounge before the flight</i></li>
                        <li><strong>&pound;55</strong> would pay for an island <i>snorkelling and day tour</i></li>
                        <li><strong>&pound;70</strong> would pay for a night at the <i>Blue Hill Beach Resort</i> on Koh Phangan</li>
                        <li><strong>&pound;100</strong> would pay for our <i>internal flights</i> to the islands</li>
                    </ul></p>

                    <p>If you are feeling particularly generous and wish to contribute more, we would very
                    grateful and all will be used to enjoy our honeymoon!</p>
                </div></div></div>
            </div>
        );
    }
}