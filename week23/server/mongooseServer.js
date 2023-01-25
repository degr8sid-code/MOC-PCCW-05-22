// import dependencies
const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routers/routes');
const cors = require('cors');
// const dbUrl = require('./config/db.config/url')
// set up dependencies

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/', router);
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
  methods: "GET, POST"
}

// app.use(cors(corsOptions));
app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000',
// }))
// set up mongoose
mongoose.connect("mongodb://127.0.0.1:27017/mytodolist")
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });
// set up port
const port = 5035;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to todo list',
  });
});

app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});