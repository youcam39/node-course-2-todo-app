const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err) {
    return console.log("Unable to connect to Mongodb server");
  }
  console.log("Connected to Mongodb server");

  // db.collection("Todos").insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Unable to insert todo", err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection("Users").insertOne({
  //   name: "Youcef AMRANI",
  //   age: 30,
  //   location: "Ain M'lila"
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Unable to insert user", err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
