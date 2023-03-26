import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context'
import ReactWhatsapp from 'react-whatsapp'

function Discounts(props) {
// const [data, setData] = useState(props.data)


const {cartItems, addToCart, removeFromCart} = useContext(Context)

function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === props.element.id)
    if(alreadyInCart) {
        return <i className="ri-shopping-cart-fill cart right" onClick={() => removeFromCart(props.element.id)}></i>
    } else {
        return <i className="cart ri-shopping-cart-line right" onClick={() => addToCart(props.element)}></i>
    }
}

// const discount = data.map(element =>{
//     return {
//         ...element,
//         discount: 15
//     }
// })



// const discountElements = props.element.map(element => {
//     return(
//             <div className='card'>
//                 <p className='discount'>{element.discount}%</p>
//                 <i class="ri-shopping-cart-line"></i>
                
//                 <Link to={`/services/${element.id}`} >
//                 <img className='card-image' src={element.image}></img>
//                 <div className='description'>
//                     <h4>{element.title}</h4>
//                     <div className='price-container'>
//                         <div className='rating'>
//                             <p>{element.rating.rate}</p>
//                             <i class="ri-star-fill"></i>
//                         </div>
//                         <p className='price'>{element.price} $</p>
                        
//                     </div>
//                 </div>
//                 </Link>
//                 <button className='buy'>BUY</button>
//             </div>
       
//     )
// })


    
  return (

        
            <div className='card'>
                    <p className='discount'>{props.element.discount}%</p>
                    
                    {cartIcon()}
                    <Link to={`/products/${props.element.id}`} >
                    <img className='card-image' src={props.element.image}></img>
                    <div className='description'>
                        <h4>{props.element.title}</h4>
                        <div className='price-container'>
                            <div className='rating'>
                                <p>{props.element.rating.rate}</p>
                                <i class="ri-star-fill"></i>
                            </div>
                            <p className='price'>{props.element.price} $</p>
                            
                        </div>
                    </div>
                    </Link>
                    <ReactWhatsapp number="+58 4121940547" message="Testing React Messages" className='buy'>BUY</ReactWhatsapp>
            </div>
      


  )
}

export default Discounts