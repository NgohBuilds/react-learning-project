export default function CardExtension({imgSrc , title, text, status}){

    return(
        <div className="card-ext">
            <div className="top_content">
                <img src={imgSrc} alt={imgSrc} />
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="card-opt">
                <button>Remove</button>
                <input type="checkbox" name="" id="" checked={status} />

            </div>


        </div>
    )
}