import { useState } from 'react'
import { Header } from './components/Header'
import { TitleFilter } from './components/TitleFilter'
import CardExtension from './components/CardExtension'
import { data } from './data'
import './App.css'

const html = document.querySelector('html')
function App() {

  const [isDark, setIsDark] = useState(false)
  // const [data, setData] = useState(data)

  function handleDarkTheme(){

      html.classList.contains('dark') ? setIsDark(false) : setIsDark(true)
      html.classList.toggle('dark')    

  }

  // function handleToggle(){

  // }

  return (
    <>
      <section>
        <Header onSmash={handleDarkTheme} theme={isDark}/>
        <TitleFilter title={"Extension List"}/>
        {
          data.map((cardContent, index)=>(
            <CardExtension
             imgSrc={cardContent.logo}
             title={cardContent.name}
             text={cardContent.description}
             status={cardContent.isActive}
             //handleToggle={handleToggle}
            />
          ))
        }

      </section>
    </>
  )
}

export default App
