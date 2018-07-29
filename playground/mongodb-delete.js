// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //to delete multiple
  // db.collection('Todos').deleteMany({text: 'Eat Dinner'}).then((result) =>{
  //   console.log(result);
  // });

  //to delte one
  // db.collection('Todos').deleteOne({text: 'Eat Dinner'}).then((result) =>{
  //   console.log(result);
  // });

  //to delete one
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Bala'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5b5df463f5f7c9044936c050")}).then((results) =>{
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
});
