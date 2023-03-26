import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { Context } from './Context'
import ReactWhatsapp from 'react-whatsapp'

function Card(props) {

    const {cartItems, addToCart, removeFromCart} = useContext(Context)

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === props.product.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart right" onClick={() => removeFromCart(props.product.id)}></i>
        } else {
            return <i className="cart ri-shopping-cart-line right" onClick={() => addToCart(props.product)}></i>
        }
    }

  return (
    
    <div className='card-product' >
        {cartIcon()}
        <img className='product-image' src={`${props.product.image}`}></img>
        <Link to={`/products/${props.product.id}`} >
        <hr />
        <h4 className='card-title'>{props.product.title}</h4>
        <div className='price-container-products'>
          <div className='rating'>
             <p>{props.product.rating.rate}</p>
            <i class="ri-star-fill"></i>
          </div>
              <p className='price'>{props.product.price} $</p>
         
           </div>
           <ReactWhatsapp number="+58 4121940547" message="Testing React Messages" ><button className='buy'>BUY</button></ReactWhatsapp>
           
           </Link>
      </div>
  
  )
}

export default Card