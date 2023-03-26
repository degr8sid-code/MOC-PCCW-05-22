// const mongoose = require("mongoose");
import mongoose from "Mongoose";
const MyTodoListSchema = new mongoose.Schema({
// taskId: {
//     type: Number,
//     required: true,
//     unique: true
// }, 
todo: {
type: String,
default: "",
required: true
},
// priority: {
//     type: String,
//     default: "high",
//     required: true
//     },
});
const MyTodoList = mongoose.model("MyTodoList", MyTodoListSchema, 'colltodolist');
// module.exports = MyTodoList;
export default MyTodoList;
//This is pretty much straight forward. 
//We imported mongoose and created a schema for storing in the database. 
//Next, we will define the logic that actually creates cause. We will do this in the controller.