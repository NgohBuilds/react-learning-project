import "./Card.css"
import Button from "./Button.jsx"
import ItemsService from "./ItemsService.jsx"
import SuccessComponent from "./SuccessComponent.jsx"
import mobileImg from '../assets/images/illustration-sign-up-mobile.svg'
import { useState } from "react"

export default function Card(){

    const [email, setEmail] = useState('')
    const [clicked, setClicked] = useState(false)
    function handleInput(e){
        setEmail(e.target.value)
    }
    function handleClick(e){
        e.preventDefault()
        setClicked(true)
        
    }
    if (clicked){
        return <SuccessComponent email={email}/>
    }

    return(
        <div id="card">
            <img src={mobileImg} alt="illustration sign-up mobile" />
            <div className="container_text">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ItemsService/>
                    <form onSubmit={handleClick} className="card-contact"> 
                        <label htmlFor="email">Email address</label>
                        <input type="mail"  id="email" placeholder="email@company.com"
                    value={email}
                    onChange={handleInput}
                    required/>
                    <button type="submit">"Subscribe to monthly newletter"</button>
                    {/* <Button  
                    
                    onSmach={handleClick}
                    text={}/> */}
                    
                    </form>
            </div>

        </div>
    )
}