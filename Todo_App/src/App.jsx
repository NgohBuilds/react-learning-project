import { TodoHead } from "./components/TodoHead"
import check from "./assets/icon-check.svg"
import cross from "./assets/icon-cross.svg"
import { Tasks} from "./data/Tasks"
import "./index.css"
import { useState } from "react"


const filterBtns = ["All", "Active", "Completed"]

function App() {

 
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState(Tasks)
  const [filter, setFilter] = useState('All')
  

  const filteredTasks = tasks.filter(task => {
    switch(filter) {
        case "Active":
            return !task.completed;

        case "Completed":
            return task.completed;

        default:
            return true;
    }
});

  const leftTasks = tasks.filter(task => !task.completed )

  function handleInputValue(e){
      setInputValue(e.target.value)
  }

  function handleAddTask(){
    if (inputValue.trim() =="") return 

    setTasks(prevTasks => [
      {
      id : Date.now(),
      content : inputValue,
      completed : false
    }, 
    ...prevTasks])
    setInputValue("")
  }

  function handleChecked(id){

    setTasks(previousTasks => previousTasks.map(
      task => task.id === id ? {...task, completed : !task.completed, } : task
      
    ))

  }

  function handleBtnFilter(btnName){
    setFilter(btnName)

  }

  function deleteTasks(id){
    
    setTasks(previousTask => previousTask.filter(task => task.id !== id))
  }

  function clearCompletedTask(){
    setTasks(previousTask => previousTask.filter(task => !task.completed))
  }
 
  return (
   
      <div id="todoContainer">

        <TodoHead/>
        <input 
          value={inputValue}
          onChange={handleInputValue}
          onKeyDown={(e)=>{if(e.key =="Enter"){ handleAddTask()}}}
          type="text" 
          placeholder="Create a new todo..."/>

        <div className="TasksContainer">
          <ul>
            {filteredTasks.map(
              task =>(
              
              <li key={task.id}>
                <div>
                  
                  <input type="checkbox" name={task.content}  id={task.id} onChange={()=> handleChecked(task.id)} checked={task.completed} />
                  <p className={task.completed ? "checked" : ""}>{task.content}</p> 
                  
                </div>
                <img src={cross} width="18" height="18" onClick={()=> deleteTasks(task.id)}/>
              </li>)
            )}

          </ul>
          
          <div className="summary">
            <span className="itemsLeft">{leftTasks.length} items left</span>
            <span className="clearCompleted" onClick={clearCompletedTask}>Clear Completed</span>
          </div>
        </div>

        <div className="filter-btn">
          <ul>
            {filterBtns.map((btn , index) =>(
              <li key={index} >
                <button  className={btn === filter ? "active": ""} onClick= {()=> handleBtnFilter(btn)} >
                  {btn}
                </button>
              </li>
            ))}
          </ul>
          
        </div>

        <div className="footer">
          <p>Drag and drop to reoder list</p>
        </div>

      </div>
      
  )
}

export default App
