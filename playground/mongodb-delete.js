const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
   // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
   //   console.log(result);
   // });

  //findOneandDelete
  db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    console.log(result);
  });

  //deleteMany
  // db.collection('Users').deleteMany({name:'A'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
   db.collection('Users').deleteOne({_id: new ObjectID("5b73f603600a7d17104f051d")}).then((result) => {
     console.log(JSON.stringfy(result,undefined,2));
   });

  //db.close();

});
