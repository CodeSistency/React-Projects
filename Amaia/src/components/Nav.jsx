import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context'

function Nav(props) {
  
  const {cartItems} = useContext(Context)

  return (
    <div className="nav-container">
        <div className='nav'>
          <i class="ri-menu-line" onClick={props.open}></i>
            <Link to="/"><img className='logo' src='logo-amaia.png' alt='logo'></img></Link>
            {/* <h2>A<span>MAIA</span></h2> */}
            <ul className='nav-list'>
                <Link to="/cart" className={`${cartItems.length > 0 ? `cart ri-shopping-cart-fill nav-icon` : `cart ri-shopping-cart-line nav-icon`}`}></Link>
            </ul>
        </div>
    </div>
  )
}

export default Nav