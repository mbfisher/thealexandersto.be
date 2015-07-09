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
                                How to share their photos.<br/>
                                They'll need to use technology,<br/>
                                Flip flop hammer mementos<br/>
                                <span className="poem__author">Mike Fisher, Age 27</span>
                            </p>
                            <p>We hope you'll take loads of photos on the day, and we'd love to be able to see them all! <a href="https://www.wedpics.com"><strong>Wedpics</strong></a> is
                                a service that lets you upload your pictures so that the bridge and groom as well as all the other guests at a wedding can see them;
                                think of it like a private Facebook. We'd really like everyone to upload their photos - you
                                can use a smartphone app or the website.</p>
                            <h4 className="text--center">Our wedding ID is <strong>SARAHROSS2192015</strong></h4>
                            <h5 className="text--center">Choose your upload method:</h5>
                        </div>
                    </div>
                    <div className="row photos__downloads">
                        <div className="four columns">
                            <h5>Website</h5>
                            <a href="http://www.wedpics.com/wedding/NzIxMzgz/album" target="_blank" style={{background: 'url(https://wedpics.com/m/img/og_facebook.png) no-repeat', backgroundSize: '115px 115px', display: 'inline-block', width: '115px', height: '115px'}}></a>
                        </div>
                        <div className="four columns">
                            <h5>iPhone &amp; iPad</h5>
                            <a href="https://geo.itunes.apple.com/gb/app/wedpics-wedding-photo-app/id549402355?mt=8" target="_blank" style={{display: 'inline-block', overflow: 'hidden', background: 'url(http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg) no-repeat', width: '135px', height: '40px'}}></a>
                        </div>
                        <div className="four columns">
                            <h5>Android</h5>
                            <a href="https://play.google.com/store/apps/details?id=com.dejami.WedPics" target="_blank">
                                <img alt="Android app on Google Play"
                                     src="https://developer.android.com/images/brand/en_app_rgb_wo_45.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}