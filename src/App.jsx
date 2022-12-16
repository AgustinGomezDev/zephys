import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Zephys!"/>
    </div>
  )
}

export default App