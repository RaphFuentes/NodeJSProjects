var mongoose = require('mongoose'),
assert = require('assert');
mongoose.Promise = require('bluebird');
var Dishes = require('./dishes2');

var url = 'mongodb://localhost:27017/conFusion'; mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
    // create a new dish
    Dishes.create({
        name: 'Noodles',
        description: 'Test',
        comments: [
            {
                rating: 3,
                comment: 'This is insane',
                author: 'Matt Daemon'
            }
        ]
    }, function (err, dish) {
        if (err) throw err;
        console.log('Dish created!');
        console.log(dish);
        db.close();
    });
});