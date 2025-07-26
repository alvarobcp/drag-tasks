import Task from './Task.jsx'
import './App.css'
import ReactDOM from 'react-dom'
import {React, useState} from 'react'
import Draggable, {DraggableCore} from 'react-draggable';

function App() {

  const[tasks, setTasks] = useState([]);
  const[canAdd, setCanAdd] = useState(false);
  

  const handleClick = (event) => {
    if (!canAdd) return;
    const x = event.clientX;
    const y = event.clientY;
    console.log('Pos X: ' + x + '- Pos Y: ' + y);
    const newTask = {positionX: x, positionY: y, id: Date.now()};
    setTasks([...tasks, newTask])
    setCanAdd(false);

  };

  function deleteTask(id){
    setTasks(tasks.filter(function(task)
    { return task.id !== id; }));
  }

  function handleAddClick(){
    setCanAdd(true);
  }

  
  return (
    <>
      <div className='background-div'><h1>My task board</h1></div>
      <div className='buttons-div'><button onClick={handleAddClick}>{!canAdd ? 'Add a new one' : 'Select the location and click!'}</button></div>
      <div id='main-container' className='app-div' onClick={handleClick}>
        {tasks.map(task => (
          <Draggable  key={task.id} handle="strong" defaultPosition={{x: task.positionX, y: task.positionY} }>
          <div ><Task deleteTask={() => deleteTask(task.id)}></Task></div>
          </Draggable>
        )
        )}
        
      </div>
    </>
  )
}

export default App

/*

function handleMouseOver(){
    if(!canAdd) return;
    setCanClick(false);
  }

  function handleMouseOut(){
    if(!canAdd) return;
    setCanClick(true);
  }
    
  <Task onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></Task></div>
const[canClick, setCanClick] = useState(false);
*/


        