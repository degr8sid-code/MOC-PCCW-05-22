// import mongoose from 'mongoose';
const mongoose = require('mongoose')
// import {MyTodoList} from '../models/model';
const MyTodoList = require('../models/model');

// create new todo
// module.exports = function createTodo(req, res) {
//   const todo = new MyTodoList({
//     _id: mongoose.Types.ObjectId(),
//     todo: req.body.todo,
//     priority: req.body.priority,
//   });
//   return todo
//     .save()
//     .then((newTodo) => {
//       return res.status(201).json({
//         success: true,
//         message: 'New todo list created successfully',
//         MyTodoList: newTodo,
//       });
//     })
//     .catch((error) => {
//       res.status(500).json({
//         success: false,
//         message: 'Server error. Please try again.',
//         error: error.message,
//       });
//     });
// }  

exports.createTodo = (req, res) => {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
  const todo = new MyTodoList({
    taskId: req.body.taskId,
    todo: req.body.todo,
    priority: req.body.priority,
  });
  return todo
    .save()
    .then((newTodo) => {
      return res.status(201).json({
        success: true,
        message: 'New todo list created successfully',
        MyTodoList: newTodo,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
}  

//get all todos
exports.getAllTodo = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Max-Age", "1800");
      res.setHeader("Access-Control-Allow-Headers", "content-type");
      res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
  MyTodoList.find()
    .select('taskId todo priority')
    // .then( () => {
    //   res.setHeader("Access-Control-Allow-Origin", "*")
    //   res.setHeader("Access-Control-Allow-Credentials", "true");
    //   res.setHeader("Access-Control-Max-Age", "1800");
    //   res.setHeader("Access-Control-Allow-Headers", "content-type");
    //   res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    // })
    .then((allTodo) => {
      // const response = res.status(200).json( {
      //   success: true,
      //   message: 'A list of all todos',
      //   Todo: allTodo
      // });
      return res.status(200).json({
        // success: true,
        // message: 'A list of all todos',
        Todo: allTodo
      });
      // return response;
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      });
    });
  }

// module.exports = {createTodo, getAllTodo}
