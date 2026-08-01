import { useState } from 'react'
import { Header } from './components/Header'
import { TitleFilter } from './components/TitleFilter'
import CardExtension from './components/CardExtension'
import { data } from './data'
import './App.css'

const html = document.querySelector('html')

function App() {

  const [isDark, setIsDark] = useState(false)
  const [filter, setFilter] = useState('All')
  const [extension, setExtension] = useState(data)
  const extensionsFiltered = extension.filter(
    ext=>
    {
      switch(filter){
        case "Active" : return ext.isActive; break;
        case "Inactive" : return !ext.isActive; break;
        default: return true;
      }
    })

  function handleDarkTheme(){

      html.classList.contains('dark') ? setIsDark(false) : setIsDark(true)
      html.classList.toggle('dark')    

  }


  function handleToggle(ind){

    setExtension(previousExtension => previousExtension.map(
      (ext, index)=> ind === index ? {...ext , isActive: !ext.isActive} : ext

    ))

  }

  function handleDel(ind){
    setExtension(previousExtension => previousExtension.filter(
      (_ , index) => index != ind))
  }


  function handleOnClick(e){

        setFilter(e.target.textContent)
    }

  return (
    <>
      <section>
        <Header onSmash={handleDarkTheme} theme={isDark}/>
        <TitleFilter title={"Extension List"} onSmash={(e)=>{handleOnClick(e)}}/>
        {
          extensionsFiltered.map((cardContent, index)=>(
            <CardExtension
             imgSrc={cardContent.logo}
             title={cardContent.name}
             text={cardContent.description}
             status={cardContent.isActive}
             handleToggle={()=> {handleToggle(index)}}
             onDelete= {()=> {handleDel(index)}}
            />
          ))
        }

      </section>
    </>
  )
}

export default App
