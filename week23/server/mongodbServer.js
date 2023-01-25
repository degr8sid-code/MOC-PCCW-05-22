const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'user-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to DB")
    }
    console.log("Connected correctly")
    const db = client.db(databaseName)
    db.collection('users').find({}).toArray((error, results) => {
        if (error) {
            console.log(error)
        }
        console.log(results)
    })
    // const db = client.db(databaseName)
    // db.collection('users').insertOne({ name: "Sidrah", age: 44, city: "Calgary"}, (err, results) => {
    //   if (err) {
    //     return err
    //   }
    //   console.log(results.insertedId)
    // })
})


