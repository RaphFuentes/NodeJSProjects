var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var operations = require('./operations');

var url = "mongodb://127.0.0.1/conFusion";

mongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    console.log('Connection Successful')
    operations.insertDocument(db,
        { "name": "Test" },
        "dishes",
        function (data) {
            console.log("Inserted Successfully");
            console.log(data);
            console.log(" ");
            console.log(" ");

            operations.findDocument(db, "dishes", function (data) {
                console.log("Found Document");
                console.log(data);
                console.log(" ");
                console.log(" ");

                operations.removeDocument(db, false,
                    { "name": "Test" },
                    "dishes",
                    function (data) {
                        console.log("Removed Document");
                        console.log("No. of removed document " + data.deletedCount);
                        console.log(" ");
                        console.log(" ");

                        operations.updateDocument(db,
                            { "name": "Noodle" },
                            { "Quantity": 9999 },
                            "dishes",
                            function (data) {
                                console.log("Updated Document");
                                console.log("Updated " + data.matchedCount + " document");
                                console.log(" ");
                                console.log(" ");

                                db.close();
                            }
                        );
                    }
                );
            });
        }
    );
});