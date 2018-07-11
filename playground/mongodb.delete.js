//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MOngoDB server');
  }
  console.log('connected to mongoDB server');

  /*db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
    console.log(result);
  });*/
//  db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //  console.log(result);
//  });
//db.collection('Users').deleteOne({name:'Andrew'}).then((result) =>{
//  console.log(result);
//});
/*db.collection('Users').findOneAndDelete({age: 24}).then((result)=>{
  console.log(result);
});*/
db.collection('Users').deleteMany({name:'mike'}).then((result)=>{
  console.log(result);
});




});
