// IMPORTS 
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
// import router from '../routers/routes';

// MIDDLEWARE CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use('/api/', router);

// const corsOptions ={
//   origin:'http://localhost:3000', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200,
//   methods: "GET, POST"
// }

// app.use(cors(corsOptions));
//app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000',
// }))

// MONGOOSE SETUP
const PORT = process.env.PORT || 6001;
mongoose.set('strictQuery', true)
.connect(process.env.MONGO_URL, {
  useNewUrlParse: true,
  useUnifiedTopology: true
})
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });
// set up port
// const port = 5035;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to todo list',
  });
});

app.listen(PORT, () => {
  console.log(`Our server is running on port ${PORT}`);
});