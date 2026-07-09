import { icons } from "./data/data"
import check from "./assets/icon-check.svg"
import cross from "./assets/icon-cross.svg"

const Tasks =["manger","dormir"]
const filterBtns = ["All", "Active", "Completed"]

function App() {
 
  return (
    <>
      <div id="todoContainer" style={{backgroundColor: "blue"}}>

        <div className="header">
            <h1 id="title"> TODO</h1>
            <img src={icons.moon} alt={icons.moon} />
        </div>

        <input
          value={""}
          type="text" />

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
      
    </>
  )
}

export default App
