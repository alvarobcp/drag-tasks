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
  const[typeTitle, setTypeTitle] = useState('My task board') //para controlar encima de que está el ratón
  

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

  function handleMouseEnter(type){
    setTypeTitle(type);
  }

  function handleMouseLeave(){
    setTypeTitle('My task board');
  }

  //[]Hacer un componente para los botones
  return (
    <>
      <div className={!canAdd ? 'background-div normal-cursor' : 'background-div add-cursor'}><h1>{!canAdd ? typeTitle : 'Click on the screen to add'}</h1></div>
      <div className='buttons-div'>
        <button onMouseEnter={() => handleMouseEnter('Add a task')} onMouseLeave={() => handleMouseLeave()} onClick={() => handleAddClick('task')}><img src="https://img.icons8.com/badges/48/note.png" alt="note icon"/></button>
        <button onMouseEnter={() => handleMouseEnter('Add a date')} onMouseLeave={() => handleMouseLeave()} onClick={() => handleAddClick('date')}><img src="https://img.icons8.com/badges/48/planner.png" alt="planner icon"/></button>
        <button onMouseEnter={() => handleMouseEnter('Add an event')} onMouseLeave={() => handleMouseLeave()} onClick={() => handleAddClick('event')}><img src="https://img.icons8.com/badges/48/concert-day.png" alt="planner date icon"/></button>
        <button onMouseEnter={() => handleMouseEnter('Add a folder')} onMouseLeave={() => handleMouseLeave()} onClick={() => handleBackClick()}><img src="https://img.icons8.com/badges/48/folder-invoices.png" alt="folder icon"/></button>
        <button onMouseEnter={() => handleMouseEnter('Add a random emoji')} onMouseLeave={() => handleMouseLeave()} onClick={() => handleEmojiClick()}><img src="https://img.icons8.com/badges/48/wink.png" alt="emoji icon"/></button>
        <button onMouseEnter={() => handleMouseEnter('Add a title')} onMouseLeave={() => handleMouseLeave()} onClick={() => handleAddClick('title')}><img src="https://img.icons8.com/badges/48/a.png" alt="title icon"/></button>
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
           <div className="drg-emoji"><p style={{margin: '0px'}}>{emoji.emoji}</p></div>
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


        