// Handles all the other functionality for tasks in to do list
import React, {useState} from "react";
import TodoForm from "./TodoForm";

function TodoTask() {
    //for the list of tasks
    const [todos, setTodos] = useState([]);

    //add task in the list of tasks
    const addTodo = todo => {
        //check for empty input 
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);


    }


    return (
        <div id="container">
            <h1 class="display-1">My To Do List Application</h1>
            <p class="lead">This is a basic to do list application with complete frontend and backend configuration. For details, check ReadMe.md of this project.</p>
            <div className='tasks'>
            </div>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}

export default TodoTask;