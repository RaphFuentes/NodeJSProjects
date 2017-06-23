var assert = require('assert');

exports.insertDocument = function(db, docs, collection, callback){
    var collections = db.collection(collection);
    console.log("Trying to insert");

    collections.insert(docs, function(err,results){
        assert.equal(err,null);
        console.log("Succesfully inserted " + results.result.n);
        callback(results);
    });
}

exports.findDocument = function(db, collection, callback){
    var collection = db.collection(collection);
        console.log("Trying to find document");
    
    collection.find({},function(err, docs){
        assert.equal(err,null);
        console.log("Found documents.");
        callback(docs);
    });
}

exports.removeDocument = function(db, justOne, docs, collection, callback){
    var collection = db.collection(collection);
    console.log("Trying to Remove");
    if (justOne){
        collection.deleteOne(docs, function(err,results){
            assert.equal(err,null);
            console.log("Succesfully deleted");
            callback(results);
        });
    }
    else {
        collection.deleteMany(docs, function(err,results){
            assert.equal(err,null);
            console.log("Succesfully deleted");
            callback(results);
        });
    }
}

exports.updateDocument = function(db, docs, docUpdate, collection, callback){
    var collection = db.collection(collection);
    console.log("Trying to Update Doc");

    collection.updateOne(docs, {$set:docUpdate}, function(err,results){
        assert.equal(err,null);
        console.log("Succesfully updated");
        callback(results);
    });
}