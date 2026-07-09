import { icons } from "../data/data.js"

export function TodoHead()
{
    return (
        <div className="header">
            <h1 id="title"> TODO</h1>
            <img src={icons.moon} alt={icons.moon} />
        </div>
    )
}