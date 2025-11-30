import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Categories from './Components/Categories'
import AllProducts from './Components/AllProducts'
import Cart from './Components/Cart'
import Users from './Components/Users'
import About from './Components/About'
import ShoppingCart from './Components/ShoppingCart'
import Login from './Components/Login/Login'
import SignUp from './Components/Login/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path='/shoppingcart' element={< ShoppingCart/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
