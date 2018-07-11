//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MOngoDB server');
  }
  console.log('connected to mongoDB server');

/*db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5b448fae4aa50779a77a6a69')
}, {
  $set: {
    completed : true
  }
  }, {
    returnOringinal: false
  }).then((result) => {
  console.log(result);
});
*/
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b44867563be943488d3a2db')
},{
  $set : {
    name: 'chetan'
  },
  $inc: {
    age: 23
  }
},{
  returnOringinal: false
}).then((result) =>{
  console.log(result);
});


});
