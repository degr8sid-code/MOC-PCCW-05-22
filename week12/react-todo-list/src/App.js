import React from 'react';
import './App.css';

function App() {
  // we'll add an array of object to store our to do list 
  // we'll add a new state hook
  const [todos, setTodos] = React.useState([]);
  
  //setter function
  const [todo, setTodo] = React.useState("");

  //add hook for editing function
  //since at the start we are not editing anything, we will keep the state null
  //todoEditing will act as an id for the one we are editing
  const [todoEditing, setTodoEditing] = React.useState(null);
  // to keep track of the text we are editing
  const [editingText, setEditingText] = React.useState("");
  
  //handleSubmit Function
  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    // now we'll set todos, spread operator will take the entire array
    // just a good practice in React if you're using objects and arrays
    //concat would add new objects in our todos object
    setTodos([...todos].concat(newTodo));
    //setting the input field to blank
    setTodo("");
  }

  function deleteTodo(id) {
    //take todo list ; entire array
    //filter out the one to be deleted
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    //and delete it
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    //returns specific value from the array
    let updatedTodos = [...todos].map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id ) {
        todo.text = editingText;
      }
      return todo;
    })
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
  }

  return (
    <div className="App" id="todo-list">
      <h1> To Do List </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => <div className="todo" key={todo.id}>
        {/* here we are converting the alread existing value into editable field */}
        <div className="todo-text">
          {todoEditing === todo.id ? 
            (<input 
             
              type="text" 
              onChange={(e) => setEditingText(e.target.value)} 
              value={editingText} 
          />) : (
            <div>{todo.text}</div>
          )} 
          
          <input 
            type="checkbox" 
            id="completed"
            onChange={() => toggleComplete(todo.id)} 
            checked={todo.completed} />
        </div>
        {/* on click, we want to change that text into an input field, so we will create a new div */}
        <div className="todo-actions">
          {todoEditing === todo.id ? (
            <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
          ) : (
            <button onClick={() => setTodoEditing(todo.id)}>Edit Item</button>
          )}

          <button onClick={() => deleteTodo(todo.id)}>Delete Items</button>
        </div>
        </div>)}
    </div>
  );
}

export default App;
