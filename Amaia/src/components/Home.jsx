import {useState, useEffect, useContext} from 'react'
import Hero from './Hero'
import Discounts from './Discounts'

import { Context } from './Context'
import Nav from './Nav'
import Menu from './Menu'

function Home() {
  
  

  const {data, isMenuOpen, handleMenu} = useContext(Context)

  

  const discount = data.map(element =>{
    return {
        ...element,
        discount: 15
    }
  })

  const discounts =  discount.map((product, index) => {
    return(
      <Discounts key={product.id} element={product} />

    )
  })
  
  return (
    <div className='home-container'>
      <Nav open={handleMenu}/>
      {isMenuOpen && <Menu open={handleMenu}/>}
        <Hero />
        <div className='discount-container'>
          <h1>DISCOUNTS</h1>
          <div className='card-container'>

          {discounts}
          </div>
        </div>
        
    </div>
  )
}

export default Home