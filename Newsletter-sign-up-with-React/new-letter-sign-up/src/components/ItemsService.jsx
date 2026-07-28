import './ItemsService.css'
import { items} from '../data/items.js'
import checkMark from '../assets/images/icon-list.svg'


export default function ItemsService(){
    return(
        <ul>
            {
                items.map((item, index)=>(
                <div className='service'>
                    <img src={checkMark} alt="icon-list " />
                    <li key={index}>{item}</li>
                </div>))
            }
        </ul>
    )
}
