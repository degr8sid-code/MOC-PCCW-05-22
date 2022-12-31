// Form to add tasks in to do list
import React from "react";
import { useState } from "react";

function TodoForm ()  {

    
    const [todo, setTodo] = useState('');
    const handleSubmit = e => {
      e.preventDefault();
  
    }
    return (
      <div id = "container" >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label for="formGroupExampleInput">Enter your to do here:</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another to do" />
            <br />
          </div>
          <button type="submit" class="btn btn-primary mb-2" >Add Task</button>
        </form>
      </div>
    );

}

export default TodoForm;