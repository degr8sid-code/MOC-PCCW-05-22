const express = require('express');
const app = express();
const low = require('lowdb');
const fs = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json')
const db = low(adapter)

db.defaults({books: []}).write();

//return all books
app.get('/data', function(req,res) {
    res.send(db.get('books').value)
});

app.listen(3001, function () {
    console.log("Running on 3001");
})