//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/people';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);
    var collection = db.collection('people');

    // var user1 = {name: 'kora', age: '25'}
    // var user1update = {name: 'kora'}, {$set: {age: '26'}}

    // document insertion

    // collection.insert(user1, function(err, result) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
    //   }
    //   db.close();
    // });

    // document updating
    collection.update({name: 'kora'}, {$set: {age: '26'}}, function(err, numUpdated) {
      if (err) {
        console.log(err);
      } else if (numUpdated) {
        console.log('updated successfully', numUpdated)
      } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
      db.close();
    });
  }
});






