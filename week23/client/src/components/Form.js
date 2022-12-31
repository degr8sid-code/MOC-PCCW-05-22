import React from "react";
import { useState } from "react";

function form ()  {

    const [tasks, setTasks] = useState(['']);
    const [task, setTask] = useState('');
    const handleSubmit = e => {
      e.preventDefault();
  
    }
    return (
      <div id = "container" >
        <h1 class="display-1">My To Do List Application</h1>
        <p class="lead">This is a basic to do list application with complete frontend and backend configuration. For details, check ReadMe.md of this project.</p>
        <div className='tasks'>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label for="formGroupExampleInput">Enter your task here:</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another task" />
            <br />
          </div>
          <button type="submit" class="btn btn-primary mb-2" >Add Task</button>
        </form>
      </div>
    );

}

export default Form;