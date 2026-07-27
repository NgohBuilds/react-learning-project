import { useState } from 'react'
import { Header } from './components/Header'
import { TitleFilter } from './components/TitleFilter'
import CardExtension from './components/CardExtension'
import { data } from './data'
import './App.css'


function App() {

  return (
    <>
      <section>
        <Header/>
        <TitleFilter title={"Extension List"}/>
        {
          data.map((cardContent, index)=>(
            <CardExtension
             imgSrc={cardContent.logo}
             title={cardContent.name}
             text={cardContent.description}
             status={cardContent.isActive}
            />
          ))
        }

      </section>
    </>
  )
}

export default App
