import { icons } from "../data/data.js"
import './todoHead.css'
import { useState } from "react"

export function TodoHead()
{
    const [isDarkTheme, setisDarkTheme] = useState(false)
    const html = document.documentElement
    function handleChangeTheme(){
        setisDarkTheme(prev => !prev)
        html.classList.toggle('dark')
    }

    return (
        <div className="header">
            <h1 id="title"> TODO</h1>
            <img src={isDarkTheme ? icons.sun : icons.moon}
             alt={isDarkTheme ? 'sun' : 'moon' } 
             onClick={handleChangeTheme}
            width="26" height="26"/>
        </div>
    )
}