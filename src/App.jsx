import Task from './Task.jsx'
import './App.css'
import ReactDOM from 'react-dom'
import {React, useState} from 'react'
import Draggable, {DraggableCore} from 'react-draggable';

function App() {

  const[tasks, setTasks] = useState([]);

  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log('Pos X: ' + x + '- Pos Y: ' + y);
    const newTask = {positionX: x, positionY: y, id: Date.now()};
    setTasks([...tasks, newTask])

  };


  return (
    <>
      <div className='background-div'><h1>My task board</h1></div>
      <div id='main-container' className='app-div' onClick={handleClick}>
        {tasks.map(task => (
          <Draggable handle="strong" defaultPosition={{x: task.positionX, y: task.positionY}}>
          <div><Task></Task></div>
          </Draggable>
          
        )
        )}
        
      </div>
    </>
  )
}

export default App

/*<Task positionX={task.positionX} positionY={task.positionY} key={task.id}></Task>
*/


        