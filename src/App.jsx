import { useState } from 'react'


import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Products from './Components/Products'

function App() {
  

  return (
    <>
      
     <Header/>

     <div className='sidebar-container'>
    <Sidebar/>
    <Products/>
     </div>
     
    </>
  )
}

export default App
