import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Inicio from './pages/Inicio'
import NewClient from './pages/NewClient'
import EditClient from './pages/EditClient'
import VewClient from './pages/VewClient'


function App() {

  return (
    <BrowserRouter>
      <Routes>
         
          <Route path='/Client' element={<Layout/>}>
            <Route index element={<Inicio/>}/>
            <Route path='new' element={<NewClient/>}/>
            <Route path='edit/:id' element={<EditClient/>}/>
            <Route path=':id' element={<VewClient/>}/>
          </Route>

      </Routes>

    </BrowserRouter>
    
  )
}

export default App
