import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Nav from './Nav'
import { Context } from './Context'

function Contact() {

  const { isMenuOpen, handleMenu} = useContext(Context)

  return (
    <div className='contact'>
      <Nav open={handleMenu}/>
      {isMenuOpen && <Menu open={handleMenu}/>}
        <div>
            <p>Phone Number: <span>04265838730</span></p>
            <p>Email: <span>moda_amaia@gmail.com</span></p>
            <p>Adress: <span>Spain, Benidorm, 4th street</span></p>
            <Link to="/faq"><p>FAQ</p></Link>
        </div>

    </div>
  )
}

export default Contact