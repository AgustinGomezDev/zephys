import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Contact } from './components/Contact/Contact'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Cart } from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <CartProvider>
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
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App