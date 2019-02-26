// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('Todos').insertOne({
        text : 'Something to do quickly',
        completed : false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined ,2));
    });

    db.collection('User').insertOne({
        Name : 'Harsh Agrawal',
        Age : 21,
        Sex : 'Male',
        Location : 'Bangalore, India'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });
    
    client.close();
})
