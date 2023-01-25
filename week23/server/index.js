const path = require('path')
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
//lowdb code
// const low = require("lowdb");
// const fs = require("lowdb/adapters/FileSync");
// const adapter = new fs("db.json")
// const db = low(adapter)


// parser for POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://localhost:8081"
  };

//use CORS
app.use(cors(corsOptions));

//swagger setup
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


//local routes
app.get('/getHello', (req,res) => {
    res.send("Hello World")
    // res.send("Some change")
    //displaying lowdb result on browser
    // const results = db.get("items").value()
    // res.send(results)
});

/**
 * @swagger
 * /tasks:
 *  get:
 *      description: get list of tasks
 *      responses: 
 *          200:
 *              description: success
 */

app.get('/tasks', (req, res) => {
    res.send([
        {
            id: 1,
            task: "edit project",
            priority: "medium"
        }, 
        {
            id:2,
            task: "prepare lunch",
            priority: "high"
        },
        {
            id:3,
            task: "take MOC session",
            priority: "high"
        }

    ])
});

/**
 * @swagger
 * /task:
 *  post:
 *      description: get one task 
 *      parameters:
 *      - name: id
 *        description: id of the task
 *        in: body
 *        required: true
 *        type: string          
 *      - name: task
 *        description: one task
 *        in: body
 *        required: true
 *        type: string
 *      responses: 
 *          200:
 *              description: success
 */
//post route
app.post('/task', (req, res) => {
    // const task = {
    //     id: req.body.id,
    //     todo: req.body.task
    // }
    const id = req.body.id;
    const task = req.body.task;
    // const priority = req.body.priority;
    res.send({"id":id, "task":task});
})
//JSON web token
//OAUTH2

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})