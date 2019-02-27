// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp')

    //deleteMany
    db.collection('Todos').deleteMany({text : 'abc'}).then((result)=> {
        console.log(result);
    })

    //deleteOne
    db.collection('Todos').deleteOne({text : 'abc'}).then((result)=> {
        console.log(result);
    })

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({text : 'abc'}).then((result)=> {
        console.log(result);
    })
   
    // client.close();
})

