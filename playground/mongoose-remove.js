const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove()
Todo.remove({}).then(result => {
    console.log(result);
});

// Todo.findOneAndRemove({});


// Todo.findByIdAndRemove(id);
var id = '59314999119a1a27266cfb1b';
Todo.findByIdAndRemove(id).then(todo => {
    console.log(todo);
});
