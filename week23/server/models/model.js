const mongoose = require("mongoose");

const MyTodoListSchema = new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
todo: {
type: String,
default: "",
required: true
},
priority: {
    type: String,
    default: "high",
    required: true
    },
});
const MyTodoList = mongoose.model("MyTodoList", MyTodoListSchema);
module.exports = MyTodoList;

//This is pretty much straight forward. 
//We imported mongoose and created a schema for storing in the database. 
//Next, we will define the logic that actually creates cause. We will do this in the controller.