import React, { useEffect, useState } from 'react'
import {Routes, Route } from "react-router-dom"
import Nav from './components/Nav'
import Hero from './components/Hero'
import Discounts from './components/Discounts'
import Products from './components/Products'
import ProductsDetail from './components/ProductsDetail'
import Home from './components/Home'
import Cart from './components/Cart'
import { ContextProvider } from './components/Context'
import Menu from './components/Menu'
import MenCollection from './components/MenCollection'
import WomenCollection from './components/WomenCollection'
import './App.scss'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import Address from './components/Address'
import Dashboard from './components/Dashboard'
import AddItem from './components/AddItem'


function App() {



  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenu(){
    setIsMenuOpen(prev => !prev)
    console.log("cliked")
  }

  

  return (
    <ContextProvider>
      <div className="App">
        {/* <Nav open={handleMenu}/> */}
        {isMenuOpen && <Menu open={handleMenu}/>}
        
        
        <Routes>
          <Route exact path='/' element={<Home />}/>

          <Route exact path='/admin' element={<Dashboard />}/>

          <Route exact path='/admin/add' element={<AddItem />}/>

          <Route exact path='/admin/edit/:id' element={<AddItem />}/>

          <Route exact path='/login' element={<Login />}/>

          <Route exact path='/signup' element={<Register />}/>

          <Route exact path='/Address' element={<Address />}/>
          
          <Route exact path='/products' element={<Products />}/>

          <Route exact path='/cart' element={<Cart />}/>

          <Route exact path='/contact' element={<Contact />}/>

          <Route exact path='/products/:id' element={<ProductsDetail />} />

          <Route exact path='/collection/men' element={<MenCollection />} />

          <Route exact path='/collection/women' element={<WomenCollection />} />
        </Routes>
        
      </div>
    </ContextProvider>
  )
}

export default App
