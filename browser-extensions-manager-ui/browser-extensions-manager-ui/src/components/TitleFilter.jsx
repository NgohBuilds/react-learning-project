
export function TitleFilter({title , }){
    return (
        <div>
            <h1>{title}</h1>
            {["All", "Active", "Inactive"].map((filter, index)=> (
                <button key={index}>{filter}</button>
            ))}

        </div>
    )
}