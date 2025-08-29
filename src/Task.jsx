
import React, { useState } from "react";

function Task({deleteTask, type}) {

    const[task, SetTask] = useState("");
    const[dateTask, SetDateTask] = useState("");
    const[locationTask, SetLocationTask] = useState("");

    function handleChange(event){
        SetTask(event.target.value);
    }

    function handleDateChange(event){
        SetDateTask(event.target.value);

    }

    function handleLocationChange(event){
        SetLocationTask(event.target.value);

    }

    function handleClick(event){
        //Aquí irán cositas...
        event.preventDefault();
    }


    switch (type) {
        case 'title':
            return(<div className="task ttitle">
                <strong><div className="drag-div">/ / / /</div></strong>
                <form>
                <textarea
                    onChange={handleChange}
                    type="text"
                    placeholder="New task..."
                    value={task}
                />
                </form>
            </div>)
        case 'task':
            return(<div className="task ttask">
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
            </div>)
        case 'date':
            return(<div className="task tdate">
                <strong><div className="drag-div">/ / / /</div></strong>
                <form>
                <label>
                    <input
                    onChange={handleDateChange}
                    type='datetime-local'
                    value={dateTask}
                    />
                </label>
                <textarea
                    onChange={handleChange}
                    type="text"
                    placeholder="New task..."
                    value={task}
                />
                </form>
                <button onClick={deleteTask}>Delete</button>
            </div>)
        case 'event':
            return(<div className="task tevent">
                <strong><div className="drag-div">/ / / /</div></strong>
                <form>
                <label>
                    <input
                    onChange={handleDateChange}
                    type='datetime-local'
                    value={dateTask}
                    />
                </label>
                <textarea
                    onChange={handleChange}
                    type="text"
                    placeholder="New task..."
                    value={task}
                />
                <textarea
                    onChange={handleLocationChange}
                    type="text"
                    placeholder="New location..."
                    value={locationTask}
                />
                </form>
                <button onClick={deleteTask}>Delete</button>
            </div>)
    
        default:
            break;
    }
    
}

export default Task

