var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;


// Connection URL
var url = 'mongodb://localhost:27017/chat';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var collection = db.collection('test_insert');

    collection.remove({}, function (err, result) {
        if (err) throw err;

        collection.insert({a: 2}, function (err, docs) {
            var cursor = collection.find({a: 2});
            cursor.toArray(function (err, result) {
                console.dir(result);
                db.close();
            });
        });
    });
});

