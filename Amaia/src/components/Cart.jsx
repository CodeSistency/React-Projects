import React, {useContext, useEffect, useState} from 'react'
import { Context } from './Context'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Menu from './Menu'

function Cart() {

  const {cartItems, clearAll, removeFromCart, isMenuOpen, handleMenu} = useContext(Context)
  const [total, setTotal] = useState(0)

  // for(let i = 0; i < cartItems.length; i++){
  //   car
  // }

  // useEffect(() => {

  //   cartItems.map(element => {
      
  //     setTotal(prev => prev + element.price)
  //   });
  // }, [total])

  useEffect(() => {

    setTotal(cartItems.reduce((totalSum, sum) => totalSum = totalSum + sum.price, 0).toFixed(2))
  }, [])
  

  console.log(total)

  const cartElements = cartItems.map(item => {
    return(
      <div className='card-product'>
        <img className='product-image' src={`${item.image}`}></img>
        <i class="ri-delete-bin-line right" onClick={() => removeFromCart(item.id)}></i>
        <Link to={`/services/${item.id}`} >
        <hr />
        <h4>{item.title}</h4>
        <div className='price-container-products'>
          <div className='rating'>
             <p>{item.rating.rate}</p>
            <i class="ri-star-fill"></i>
          </div>
              <p className='price'>{item.price} $</p>
         
           </div>
           <button className='buy'>BUY</button>
           </Link>
      </div>
    )
  })
  return (
    <div>
      <Nav open={handleMenu}/>
      {isMenuOpen && <Menu open={handleMenu}/>}

      <div className='cart'>
        {/* BUY */}
        {/* TOTAL */}

        <div className='cart-information-container'>

          <div className='cart-information' onClick={clearAll}>
            <h1>Cart Items</h1>
            <hr style={{backgroundColor: "white"}}></hr>
            <h3>Number of items {cartItems.length}</h3>
            <br />
            <h2>TOTAL: <span style={{color: "white", fontSize: "1.3rem"}}>{total}$</span></h2>
            <br></br>
            <button className='buy-all'>Buy All</button>
          </div>
        </div>

        
        <div className='cart-product-container'>
          {cartElements}
        </div>
      </div>
    </div>
  )
}

export default Cart