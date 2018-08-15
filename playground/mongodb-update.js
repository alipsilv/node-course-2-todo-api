const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b7437216c8fca1436451aef")
  // },{
  //   $set:{
  //     completed: false
  //   }
  // },{
  //   returnOriginal:false
  // }).then((results)=>{
  //   console.log(results);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b74397e6c8fca1436451b58")
  },{
    $set:{
      name: 'Aline'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((results)=>{
    console.log(results);
  });


  //db.close();

});
