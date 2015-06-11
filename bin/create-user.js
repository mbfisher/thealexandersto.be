'use strict';

import Firebase from '../src/services/Firebase';
import User from '../src/services/User';

const user = new User(process.argv[2]);

Firebase.createUser({
    email: user.getEmail(),
    password: user.getPassword()
}, function (err, user) {
    if (err) {
        console.error(err);
    } else {
        console.log(user);
    }

    process.exit(0);
})