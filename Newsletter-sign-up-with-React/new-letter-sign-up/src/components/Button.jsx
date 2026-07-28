import "./button.css"

export default function Button({text, onSmach}){
    
    return <button 
    onClick ={onSmach}
    type="submit"
     >{text}</button>
}