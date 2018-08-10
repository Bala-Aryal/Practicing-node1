const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b5e4fd26820dde6054b75d31';
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID is not Valid');
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById('5b6a4803d313b3fd04951d5c').then((user) => {
  if(!user) {
    return console.log('Id not found');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e)
});
