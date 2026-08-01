import { useState } from 'react'
import { Header } from './components/Header'
import { TitleFilter } from './components/TitleFilter'
import CardExtension from './components/CardExtension'
import { data } from './data'
import './App.css'

const html = document.querySelector('html')

function App() {

  const [isDark, setIsDark] = useState(false)
  const [extension, setExtension] = useState(data)

  function handleDarkTheme(){

      html.classList.contains('dark') ? setIsDark(false) : setIsDark(true)
      html.classList.toggle('dark')    

  }

//   function handleToggle(e, index){

//     return

// }


  function handleToggle(ind){

    setExtension(previousExtension => previousExtension.map(
      (ext, index)=> ind === index ? {...ext , isActive: !ext.isActive} : ext

    ))

  }

  function handleDel(ind){
    setExtension(previousExtension => previousExtension.filter(
      (_ , index) => index != ind))
  }

  return (
    <>
      <section>
        <Header onSmash={handleDarkTheme} theme={isDark}/>
        <TitleFilter title={"Extension List"}/>
        {
          extension.map((cardContent, index)=>(
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
