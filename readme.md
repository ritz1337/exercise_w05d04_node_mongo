# Using Mongo in Node

## Research questions - To the docs!

- http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/
- https://www.npmjs.com/package/mongodb

How do you add MongoDB to a Node project?
npm install --save mongodb

How do you connect to MongoDB through Node?
mongod to initialize mogodb server

[Default mongod port: mongodb://localhost:27017/:path]

app.js:
var mongodb = require('mongodb');

    var MongoClient = mongodb.MongoClient;

    var url = 'mongodb://localhost:27017/people';

    MongoClient.connect(url, function (err, db) {
      if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
      } else {
        console.log('Connection established to', url);
      }
    });`
then
    `$ node app.js`


Do you still need to run a MongoDB server?
Yes on which you create a mongo instance

If we were to build an Express app that persists data, where would
we use the MongoDB Node client?
on your app.js - on the express server in your project folder.

If we asked an express server to return all the the objects in a mongoDB database
- What might the request from the Browser look like?
$.ajax({
          url: 'http://localhost:28017/local/andyb',
          type: 'get',
          dataType: 'jsonp',
          jsonp: 'jsonp', // mongod is expecting the parameter name to be called "jsonp"
          success: function (data) {
            console.log('success', data);
          },
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', errorThrown);
          }
      });`

- What mongoDB method might we use on the server?
var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  var col = db.collection('find');
  // Insert a single document
  col.insertMany([{a:1}, {a:1}, {a:1}], function(err, r) {
    assert.equal(null, err);
    assert.equal(3, r.insertedCount);

    // Get first two documents that match the query
    col.find({a:1}).limit(2).toArray(function(err, docs) {
      assert.equal(null, err);
      assert.equal(2, docs.length);
      db.close();
    });
  });
});


If we asked an express server to find an object by its ID and update some of it's date
- What might the request from the Browser look like?
$('formbutton').on('click, function(evt) {
    $.post('/collection, function (response) {
    console.log('success')
    }
    ')

- What mongoDB method might we use on the server?
db.collection.find(query name/type here).update()

## Can you?

- Install the MongoDB node module
- require the module inside `app.js`
- Inside app.js - connect to a mongoDB
- Insert your name and age into a collection
- Run the script and check via the mongo shell that it worked
- Can you update your age 
- Run the script and check via the mongo shell that it worked
- Can you find the document with your name as a criteria
- Run the script and check via the mongo shell that it worked
- Can you delete the document
- Run the script and check via the mongo shell that it worked

- [MongoDB driver for Node](https://www.npmjs.com/package/mongodb)
- [MongoClient](https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html)
