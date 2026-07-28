import successIcon from "../assets/images/icon-success.svg"
import Button from "./Button.jsx"
import '../components/successComponent.css'
import { useState } from "react"
import Card from "./Card.jsx"


export default function SuccessComponent({email}){

    const [isClicked, setIsClicked] = useState(false)
    if (isClicked){
        return <Card/>
    }
    function handleClick(){
        setIsClicked(true)
    }
    return(
        <div className="container-success">
            
            <div className="text_part">
                <img src={successIcon} alt="success icon" />
                <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to <span id="userMail">{email}</span>.
                    Please open it and click the button inside to confirm your subscriptio
                </p>
            </div>
            <Button 
            onSmach={handleClick}
            text={"Dismiss message"}/>

        </div>
        
    )
}