import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

function TodoUpdate({ todos, completeTodo, removeTodo, updateTodo }) {
    const [editTodo, setEditTodo] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(editTodo.id, value)
        setEditTodo( {
            id: null,
            value: ''
        })

    }

    if (editTodo.id) {
        return <TodoForm edit={editTodo} onSubmit={submitUpdate} />
    }

    return (
        <ul className="list-group">
        {todos.map((todo, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
             <span>{todo.text}
             {/* <button onClick={() => removeTodo(todo.id)} /> */}
             { <RiCloseCircleLine className="iwt" onClick={ () => removeTodo(todo.id)}/>}
             <TiEdit className="iwt" onClick={ () => setEditTodo({id: todo.id, value: todo.text})}/>
             </span>
        </li>
        ))}
        </ul>
    );
}

export default TodoUpdate;