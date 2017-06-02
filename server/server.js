const express = require("express");
const bodyParser = require("body-parser");
const {mongoose} = require("mongoose");
const {ObjectID} = require('mongodb');

const {Todo} = require("./models/todo.js");
const {User} = require("./models/user.js");

var app = express();
var port = process.env.port || 3000;
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) return res.status(404).send();

    Todo.findById(id).then(todo => {
        if(!todo) return res.status(404).send();
        res.send(todo);
    }).catch(e => {
        return res.status(404).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)) return res.status(404).send();

    Todo.findByIdAndRemove(id).then(todo => {
        if(!todo) return res.status(404).send();
        res.send({todo});
    }).catch(e => {
        res.status(404).send();
    });
});

app.listen(port, () => {
  console.log(`Express server started on port ${port}`);
});
