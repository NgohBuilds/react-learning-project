import { useState } from "react"

export function TitleFilter({title , onSmash}){



    return (
        <div>
            <h1>{title}</h1>
            {["All", "Active", "Inactive"].map((filter, index)=> (
                <button key={index} onClick={onSmash}>{filter}</button>
            ))}

        </div>
    )
}