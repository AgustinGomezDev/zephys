import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/products/:categoryId" element={<ItemListContainer />}/>
        <Route path="*" element={<Navigate to={"/"} />}/> 
        {/* USAR NAVIGATE O CREAR COMPONENTE CON ERROR 404 */}
      </Routes>
    </BrowserRouter>
  )
}

export default App