var mongoose = require('mongoose');
var asset = require('assert');
mongoose.Promise = require('bluebird');
var Dishes = require('./dishes');

var url = "mongodb://127.0.0.1:27017/conFusion";
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', function () {
    console.log("error");
});

/*db.once('open', function () {
    console.log("Connected successfully");
    var dish = new Dishes({
        name: "Fish",
        description: "Test from Mongoose",
    });

    dish.save(function (err) {
        if (err) throw err;
        console.log("Dishes Created");
        Dishes.find({}, function (err, dish1) {
            console.log(dish1);
            db.collection('dishes').drop(function () {
                db.close();
            });
        });
    })
});*/

Dishes.create({
    name: "SFish_f3",
    description: "Created static2"},
    function(err, dish){
        console.log("Dish created");
        var id = dish._id;

        Dishes.findByIdAndUpdate(
            id,
            {$set: {"description": "Shark"}},
            { new: true },
            function(err, dish1){
                if (err) throw err;
                console.log(dish1);
                //db.close();
                Dishes.findByIdAndRemove(
                    id,
                    function(err, dish1){
                        if (err) throw err;
                        console.log("Dish remvoed");
                        db.close();
                    }
                );
            }
        );
    }
);