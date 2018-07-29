// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b5e22bf80daff96148831dd")
  // },{
  //   $set:{
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b5e181f3b55640509a2ff8d")
  },{
    $set:{
      name: 'Bala'
    },
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });
  // db.close();
});
