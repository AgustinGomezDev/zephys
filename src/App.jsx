import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Contact } from './components/Contact/Contact'
import { AboutUs } from './components/AboutUs/AboutUs'
import { CartContext } from './context/CartContext'
import { Cart } from './components/Cart/Cart'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // setCart([...cart, item])
    const newCart = cart.slice()
    newCart.push(item)
    setCart(newCart)
  }

  const emptyCart = () => {
    setCart([])
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  return (
    <CartContext.Provider value={{cart, addToCart, isInCart, emptyCart}}> 
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/products/search/:search" element={<ItemListContainer />}/>
          <Route path="/products/:categoryId" element={<ItemListContainer />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<Navigate to={"/"} />}/> 
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App