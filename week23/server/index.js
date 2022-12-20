const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require(swagger-ui-express);
const app = express();
const port = 4000;

//swagger setup
const swaggerOptions = {
    swaggerDefinition : {
        info: {
            title: 'My To Do List API',
            version: '1.0.0'
        }
    },
    apis : ['index.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
//lowdb code
const low = require("lowdb");
const fs = require("lowdb/adapters/FileSync");
const adapter = new fs("db.json")
const db = low(adapter)

//local routes
app.get('/', (req,res) => {
    res.send('Hello World')
    //displaying lowdb result on browser
    // const results = db.get("items").value()
    // res.send(results)
});

app.get('/lists', (req, res) => {
    res.send([
        {
            task: "edit project"
        }
    ])
});

//post route

//JSON web token
//OAUTH2

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})