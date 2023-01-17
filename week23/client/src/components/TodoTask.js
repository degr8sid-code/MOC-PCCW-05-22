// Handles displaying components related to todo task list
import React, {useState} from "react";
import TodoForm from "./TodoForm";
import TodoUpdate from "./TodoUpdate";

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
        console.log(todos);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const remove = [...todos].filter(todo => todo.id !== id);
        setTodos(remove);
        
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) 
            {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    }
    return (
        <div id="container">
            <h1 className="display-1">My To Do List Application</h1>
            <p className="lead">This is a basic to do list application with complete frontend and backend configuration. For details, check ReadMe.md of this project.</p>
            {/* calling the form component to show a text field */}
            <label htmlFor="formGroupExampleInput">Enter your to do here:</label>
            <TodoForm onSubmit={addTodo}/>
            {/* checking if the list is empty, otherwise list all the todos with update and delete button */}
            {todos.length === 0 ? 
                <p className="lead">The list is empty!</p> :
                <TodoUpdate todos={todos} completeTodo={setTodos} removeTodo={removeTodo}
                updateTodo={updateTodo}/>
            }
        </div>
    )
}

export default TodoTask;