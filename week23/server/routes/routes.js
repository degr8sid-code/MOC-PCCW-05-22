import express from 'express';
import cors from 'cors';

// const express = require("express");
// const cors = require("cors");
// const todolist_controller = require('../controllers/controller')
const app = express();
const router = express.Router();
// router.post('/todos', todolist_controller.createTodo);
// router.get('/todos', todolist_controller.getAllTodo);
// router.get('/todos', TodoControl.getAllTodos);
// export default router;
// module.exports = router;

export default router;
// app.post("/add_todo", async (request, response) => {
//     const todo = new MyTodoListModel(request.body);
  
//     try {
//       await todo.save();
//       response.send(todo);
//     } catch (error) {
//       response.status(500).send(error);
//     }
// });

// app.get("/todos", async (request, response) => {
//     const todos = await MyTodoListModel.find({});
  
//     try {
//       response.send(todos);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

//   module.exports = app;