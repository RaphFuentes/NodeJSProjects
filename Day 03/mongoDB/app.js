var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://127.0.0.1/conFusion";

mongoClient.connect(url,function(err,db){
    assert.equal(err,null);
    console.log('Connection Successful')
    var collection = db.collection("dishes");
    collection.insertOne({
        "name" : "Pizza",
        "description" : "Italian"
    }, function(err, result){
        console.log("After Insert");
        console.log(result.ops);
        console.log("Successfull inserterd " + result.result.n, "Records");
        console.log(" ");
        console.log(" ");

        collection.find({}).toArray(function(err,docs){
            assert.equal(err, null);
            console.log(docs);
            console.log(docs.length, " records found");
            console.log(" ");
            console.log(" ");
            db.dropCollection("dishes", function(err,result){
                assert.equal(err,null);
                console.log("Dropped Successfully");
                db.close();
            });
        });
    });
});