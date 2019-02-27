
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp')
    // findOneAndUpdate(filter,update, options,callback(promise))
    db.collection('Todos').findOneAndUpdate({
        _id = new ObjectID('866274868d8uw98fy3o')
    },{
        $set:{
            completed: true
        }
    },{
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    })
    // client.close();
})

