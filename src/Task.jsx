
import React, { useState } from "react";

function Task({deleteTask}) {

    const[task, SetTask] = useState("");

    function handleChange(event){
        SetTask(event.target.value);
    }

    function handleClick(event){
        //Aquí irán cositas...
        event.preventDefault();
    }

  return (
    <div className="task">
        <strong><div className="drag-div">/ / / /</div></strong>
        <form>
        <textarea
            onChange={handleChange}
            type="text"
            placeholder="New task..."
            value={task}
        />
        </form>
        <button onClick={deleteTask}>Delete</button>
    </div>
  )
}

export default Task

