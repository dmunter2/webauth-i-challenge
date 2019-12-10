
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model');

module.exports = (req, res, next) => {

    if (req.session && req.session.user) {
        if (req.session) {
            console.log(req.session)
        }
        next();
    } else {
        res.status(400).json({ message: 'No credentials provided' });
    }
};


