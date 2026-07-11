import { icons } from "../data/data.js"
import './todoHead.css'
export function TodoHead()
{
    return (
        <div className="header">
            <h1 id="title"> TODO</h1>
            <img src={icons.moon} alt={icons.moon} width="26" height="26"/>
        </div>
    )
}