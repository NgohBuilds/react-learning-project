import { TodoHead } from "./components/TodoHead"
import check from "./assets/icon-check.svg"
import cross from "./assets/icon-cross.svg"
import { Tasks} from "./data/Tasks"
import "./index.css"


const filterBtns = ["All", "Active", "Completed"]

function App() {
 
  return (
   
      <div id="todoContainer">

        <TodoHead/>
        <input value={""} type="text" placeholder="Create a new todo..."/>

        <div className="TasksContainer">
          <ul>
            {Tasks.map(
              (task, index) =>(
              
              <li key={index}>
                <div>
                  <input type="checkbox" name="" id="" />
                  <p>{task}</p>
                </div>
                <img src={cross} width="18" height="18"/>
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
