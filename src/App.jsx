import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/navbar/NavBar'
import MainContent from './Components/maincontent/MainContent'
import Services from './Components/services/Services'
import Process from './Components/process/Process'
import Collaboration from './Components/collab/Collaboration'
import Footer from './Components/footer/Footer'
import { Route,Routes } from 'react-router-dom'
import Index from './Components/Home/Index'
function App() {

  return (
    <>
    
       {/* <NavBar/>
      <MainContent/>
      <Services/>
      <Process/>
      <Collaboration/>
      // <Footer/> */}
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/MainContent' element={<MainContent/>}/>
      </Routes>
    </>
  )
}

export default App
