//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MOngoDB server');
  }
  console.log('connected to mongoDB server');

  /*db.collection('Todos').find({
    _id:new ObjectID('5b448fae4aa50779a77a6a69')
         }).toArray().then((docs) =>{

        console.log('Todos');
        console.log(JSON.stringify(docs, undefined ,2));
  },(err) => {
    console.log('Unable to fetch todos',err);
  });
*/
/*db.collection('Todos').find().count().then((count) =>{
      console.log(`Todos count : ${count}`);
},(err) => {
  console.log('Unable to fetch todos',err);
});*/

db.collection('Users').find({name:'andrew'}).toArray().then((docs) =>{
console.log(JSON.stringify(docs, undefined ,2));
});

      // db.close();
});
