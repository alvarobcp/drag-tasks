import Task from './Task.jsx'
import Back from './Back.jsx'
import './App.css'
import ReactDOM from 'react-dom'
import {React, useState} from 'react'
import Draggable, {DraggableCore} from 'react-draggable';


function App() {

  const emojisList = ['✌️','🤟','🤙','❤️','💙','😄','🤣','🤩','👍','👉']; //de momento saldrán random

  const[tasks, setTasks] = useState([]);
  const[canAdd, setCanAdd] = useState(false);
  const[taskType, setTaskType] = useState('');
  const[backs, setBacks] = useState([]);
  const[emojis, setEmojis] = useState([]);
  const[clickType, setClickType] = useState(''); //para saber que es si un back o una task
  

  const handleClick = (event) => {
    if (!canAdd) return;
    const x = event.clientX;
    const y = event.clientY;
    console.log('Pos X: ' + x + '- Pos Y: ' + y);
    switch (clickType) {
      case 'task':
        const newTask = {positionX: x, positionY: y, id: Date.now(), typ: taskType};
        setTasks([...tasks, newTask]);
        break;
      case 'back':
        const newBack = {positionX: x, positionY: y, id: Date.now()}
        setBacks([...backs, newBack]);
        break;
      case 'emoji':
        const newEmoji = {positionX: x, positionY: y, id: Date.now(), emoji: emojisList[Math.floor(Math.random() * emojisList.length)]}
        setEmojis([...emojis, newEmoji]);
        break;
      default:
        break;
    }
   
    //aqui hacer un switch, ahora esta asi por pruebas no se si añadiré más cosas
    setCanAdd(false);

  };

  function deleteTask(id){
    setTasks(tasks.filter(function(task)
    { return task.id !== id; }));
  }

  function handleAddClick(type){
    setTaskType(type);
    setClickType('task')
    setCanAdd(true);
  }

  function handleBackClick(){
    setClickType('back')
    setCanAdd(true);
  }

  function handleEmojiClick(){
    setClickType('emoji')
    setCanAdd(true);
  }

  
  return (
    <>
      <div className='background-div'><h1>My task board</h1></div>
      <div className='buttons-div'>
        <button onClick={() => handleAddClick('task')}>{!canAdd ? 'New Task' : 'Select the location and click!'}</button>
        <button onClick={() => handleAddClick('date')}>{!canAdd ? 'New Date' : 'Select the location and click!'}</button>
        <button onClick={() => handleAddClick('event')}>{!canAdd ? 'New Event' : 'Select the location and click!'}</button>
        <button onClick={() => handleAddClick('title')}>{!canAdd ? 'New Title' : 'Select the location and click!'}</button>
        <button onClick={() => handleBackClick()}>{!canAdd ? 'New Back' : 'Select the location and click!'}</button>
        <button onClick={() => handleEmojiClick()}>{!canAdd ? 'New Emoji' : 'Select the location and click!'}</button>
      </div>
      <div id='main-container' className='app-div' onClick={handleClick}>
        {tasks.map(task => (
          <Draggable  key={task.id} handle="strong" defaultPosition={{x: task.positionX, y: task.positionY} }>
          <div className="drg-task"><Task deleteTask={() => deleteTask(task.id)} type={task.typ}></Task></div>
          </Draggable>
        )
        
        )} 
        
        {backs.map(back => (
          <Draggable  key={back.id} handle="strong" defaultPosition={{x: back.positionX, y: back.positionY} }>
           <div className="drg-back"><Back></Back></div>
          </Draggable>

        )
        )}

        {emojis.map(emoji => (
          <Draggable  key={emoji.id} defaultPosition={{x: emoji.positionX, y: emoji.positionY} }>
           <div className="drg-emoji"><p>{emoji.emoji}</p></div>
          </Draggable>
        ))}
        
        
      </div>
    </>
  )
}

export default App

/*

IDEAS
[] Stickers
[] Links
[] Subir archivos/imagenes





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


        