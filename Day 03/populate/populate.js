var Mongoose = require('mongoose');
Mongoose.Promise = require('bluebird');
var Person = require('./person');
var Story = require('./story');
15
var url = "mongodb://127.0.0.1:27017/conFusion";
Mongoose.connect(url);
var db = Mongoose.connection;

db.on('error', function () {
    console.log("Error opening the connection");
});

db.once('open', function () {
    console.log("Opened Successfully");
    var david = new Person({
        name: 'David',
        age: 100
    });

    david.save(function (err) {
        if (err) throw err;
        console.log("Saved David Successfully");
        var story1 = new Story({
            title: "A man who cooked Nintendo"
            , _creator: david._id
        });

        story1.save(function (err) {
            if (err) throw err;
            console.log("Saved Nintendo story Successfully");

            Story.findOne({ title: /Nintendo/i })
                .populate('_creator') // <--
                .exec(function (err, story) {
                    if (err) throw err;
                    console.log('The creator is %s', story._creator.name);
                    // prints "The creator is David"
                    db.collection('people').drop(function () {
                        db.collection('stories').drop(function () {
                            db.close();
                        });
                    });
                });

            /*Story.findOne({ title: /Nintendo/i }, function(err,data){
                console.log(data);
                db.collection('people').drop(function () {
                    db.collection('stories').drop(function () {
                        db.close();
                        });
                });*/
            });
        });
    });