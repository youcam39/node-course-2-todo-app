// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err) {
    return console.log("Unable to connect to Mongodb server");
  }
  console.log("Connected to Mongodb server");

  // db.collection("Todos").findOneAndUpdate(
  //   {_id: new ObjectID("59218945d9f8ab0494ec739a")},
  //   {$set: {completed: true}},
  //   {returnOriginal: false}
  // ).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndUpdate(
      {_id: new ObjectID("59218907083984048d284dc8")},
      {
        $set: {name: "Babay Sanya"},
        $inc: {age: 2}
      },
      {returnOriginal: false}
  ).then((reesult) => {
      console.log(reesult);
    });

  db.close();
});
