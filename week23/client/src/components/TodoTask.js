// Handles displaying components related to todo task list
import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoUpdate from "./TodoUpdate";
import axios from "axios";
function TodoTask() {
    //for the list of tasks
    const [todos, setTodos] = useState([]);
    //add task in the list of tasks
    const addTodo = async todo => {
        //check for empty input 
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        const json = JSON.stringify({todo: todo.text});
        setTodos(newTodos);
        console.log(todo);
        console.log(json);
        try {
            console.log("trying post")
            await axios.post("http://localhost:5035/api/todos", json, {
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            console.log("trying post")
          } catch (error) {
            console.log(error);
          }

    }

    const ViewAllTodos = () => {
        useEffect(() => {
            getAllTodo();
        }, []);
    }

    const getAllTodo = async () => {
        const response = await axios.get("http://localhost:5035/api/todos");
        setTodos(response.data.Todo);
        console.log(response.data.Todo);
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
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

    const [message, setMessage] = useState('');


    return (
        <div id="container">
            <h1 className="display-1">My To Do List Application</h1>
            <p className="lead">This is a basic to do list application with complete frontend and backend configuration. For details, check ReadMe.md of this project.</p>
            {/* calling the form component to show a text field */}
            <label htmlFor="formGroupExampleInput">Enter your to do here:</label>
            <TodoForm onSubmit={addTodo} />
            {/* checking if the list is empty, otherwise list all the todos with update and delete button */} 
            {todos.length === 0 ?
                <p className="lead">The list is empty!</p> :
                <TodoUpdate todos={todos} completeTodo={setTodos} removeTodo={removeTodo}
                    updateTodo={updateTodo} />
            }
            {/* {todos.length === 0 ? <p>Empty</p> : 
                todos.map((todo, index) => (
                    <tr key={todo._id}>
                      <td>{todo.priority}</td>
                      <td>{todo.todo}</td>
                    </tr>
                  ))
            }        */}
        </div>
    )
}

export default TodoTask;