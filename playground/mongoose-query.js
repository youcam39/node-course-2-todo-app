const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59274fc97f19b1fc781d1811!';
//
// if(! ObjectID.isValid(id)) {
//     return console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('todo by id', todo);
// }) ;

User.findById('592756b21853b140db71600c').then(user => {
    if(!user) return console.log('User not found');
    console.log(JSON.stringify(user, null, 2));
}).catch(e => console.log(e));
