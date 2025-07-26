
import React, { useState } from "react";

function Task() {

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
        <strong><div>Drag here</div></strong>
        <p>Hola que tal este es mi task bonito chuli</p>
        <form>
        <input
            onChange={handleChange}
            type="text"
            placeholder="New task..."
            value={task}
        />
        <button type="submit">Guardar</button>
        </form>
    </div>
  )
}

export default Task

