const express = require('express'); //Line 1
const app = express(); //Line 2
const port = 3001; //Line 3
const low = require('lowdb');
const fs = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json')
const db = low(adapter)

db.defaults({books: []}).write();

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/data', function(req,res) {
    res.send(db.get('books').value)
});