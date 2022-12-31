// Form to add tasks in to do list
import React from "react";
import { useState } from "react";

function TodoForm (props)  {

    
    const [todo, setTodo] = useState('');

    const handleChange = e => {
      setTodo(e.target.value)
    }

    const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: todo
      });

      setTodo('')
    }
    return (
      <div id = "container" >
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="formGroupExampleInput">Enter your to do here:</label>
            <input 
              type="text" 
              className="form-control" 
              id="formGroupExampleInput2" 
              placeholder="Another to do" 
              value={todo}
              onChange={handleChange}/>
            <br />
          </div>
          <button type="submit" className="btn btn-primary mb-2" >Add Task</button>
        </form>
      </div>
    );

}

export default TodoForm;