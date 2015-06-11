'use strict';


export default function loginController(req, res) {
    const collection = req.db.collection('invitations');

    if (!req.body.username) {
        return res.status(400).json('No username found in request');
    }

    collection.findOne({username: req.body.username}, (err, result) => {
        console.log(result);
        if (!result) {
            return res.status(404).send();
        }

        res.json(result);
    });
}