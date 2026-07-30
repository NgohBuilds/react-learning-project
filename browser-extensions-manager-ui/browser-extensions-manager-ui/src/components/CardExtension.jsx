import { useState } from "react"
import { data } from "../data"

export default function CardExtension({imgSrc , title, text, status, handleToggle}){

    return(
        <div className="card-ext">
            <div className="top_content">
                <img src={imgSrc} alt={imgSrc} width="60" height="60"/>
                <div className="top_content_text">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
 
            </div>
            <div className="card-opt">
                <button>Remove</button>
                
                <label className="switch">
                    <input
                    type="checkbox"
                    checked={status}
                    onChange={handleToggle}
                    />
                    <span className="slider"></span>
                </label>

            </div>


        </div>
    )
}