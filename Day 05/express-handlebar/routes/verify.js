var User = require('../model/users');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config/config.js');

exports.getToken = function (user) {
    return jwt.sign(user, config.secretKey, {
        expiresIn: 3600
    });
};

exports.verifyOrdinaryUser = function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    console.log("Verfying user");
    // decode token
    if (token) {
        // verifies secret and checks exp
        console.log("has token");
        jwt.verify(token, config.secretKey, function (err, decoded) {
            console.log("verifying");
            if (err) {
                console.log("has error");

                var err = new Error('You are not authenticated!');
                err.status = 401;
                return next(err);
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        console.log("no token")
        var err = new Error('No token provided!');
        err.status = 403;
        return next(err);
    }
};