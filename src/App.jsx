import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Hiring from './Components/Hiring'

function App() {
  

  return (
    <>
    
     <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Hiring/>
    
    </>
  )
}

export default App
