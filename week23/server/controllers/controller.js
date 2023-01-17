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
  const todo = new MyTodoList({
    _id: mongoose.Types.ObjectId(),
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
  MyTodoList.find()
    .select('_id todo priority')
    .then((allTodo) => {
      return res.status(200).json({
        success: true,
        message: 'A list of all todos',
        Todo: allTodo,
      });
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
