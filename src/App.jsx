import { useState } from 'react'


import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

function App() {
  

  return (
    <>
     <Header/>

     <div className='sidebar-container'>
    <Sidebar/>
     </div>
    </>
  )
}

export default App
