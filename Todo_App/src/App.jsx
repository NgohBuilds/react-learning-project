import { TodoHead } from "./components/TodoHead"
import check from "./assets/icon-check.svg"
import cross from "./assets/icon-cross.svg"
import { Tasks} from "./data/Tasks"


const filterBtns = ["All", "Active", "Completed"]

function App() {
 
  return (
   
      <div id="todoContainer" style={{backgroundColor: "blue"}}>

        <TodoHead/>
        <input value={""} type="text" placeholder=""/>

        <div className="TasksContainer">
          <ul>
            {Tasks.map(
              (task, index) =>(
              
              <li key={index}>
                <input type="checkbox" name="" id="" />
                <span>{task}</span>
                <img src={cross} />
              </li>)
            )}

          </ul>

          <div className="summary">
            <span class="itemsLeft">{Tasks.length} items left</span>
            <span className="clearCompleted">Clear Completed</span>
          </div>
        </div>

        <div className="filter-btn">
          <ul>
            {filterBtns.map((btn , index) =>(
              <li key={index}>{btn}</li>
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
