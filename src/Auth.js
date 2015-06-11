'use strict';

import Cookies from 'cookies-js';

const COOKIE_NAME = 'USER';

export default class Auth {
    isLoggedIn(req) {
        return req.cookies[COOKIE_NAME] !== undefined
    }

    getUser(req) {
        return {
            username: req.cookies[COOKIE_NAME]
        };
    }
}