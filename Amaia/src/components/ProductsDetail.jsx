import React, {useContext, useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next';

// import { useParams } from 'react-router'
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Context } from './Context';
import Nav from './Nav';
import Menu from './Menu';
import ReactWhatsapp from 'react-whatsapp';

function ProductsDetail(props) {

const {t, i18n} = useTranslation()

// const {id} = useParams()
const {data, cartItems, addToCart, removeFromCart, isMenuOpen, handleMenu} = useContext(Context);

const [quantity, setQuantity] = useState(1);
const [isSize, setIsSize] = useState("")

function add(){
  setQuantity(prev => prev + 1)
}

function substract(){
  setQuantity(prev => prev - 1)
}

function cartIcon() {
  const alreadyInCart = cartItems.some(item => item.id === thisProduct.id)
  if(alreadyInCart) {
      return <button className='add-product-detail' onClick={() => removeFromCart(thisProduct.id)}><h4>{t("remove-cart")}</h4><i style={{color: "black", fontWeight: "100", fontSize: "26px"}} className="ri-delete-bin-line center-right" onClick={() => removeFromCart(thisProduct.id)}></i></button>
  } else {
      return <button className='added-product-detail' onClick={() => addToCart(thisProduct)}><h4>{t("add-cart")}</h4><i style={{color: "black", fontWeight: "300", fontSize: "26px"}} className="ri-add-circle-line  center-right" onClick={() => addToCart(thisProduct)}></i></button>
  }
}



const location = useLocation();
const array = location.pathname.split("/products/")
const string = array[1]
const id = parseInt(string)
console.log(array)


function chooseSize(size){
  setIsSize(prev => size)
}

const sizes = [
  {
    id: 1,
    size: "XS"
  },
  {
    id: 2,
    size: "S"
  },
  {
    id: 3,
    size: "L"
  },
  {
    id: 4,
    size: "M"
  },
]

const sizeElements = sizes.map(size => {
  return(
    <div onClick={() => chooseSize(size.size)} className={`${isSize == size.size ? "size-selected" : 'size'}`}>
      <h3>{size.size}</h3> 
    </div>
  )
})


const thisProduct = data.find(product => product.id === id)
// const thisService = servicesData.find(service => service._id === serviceId)
// console.log(thisProduct.title)
console.log(data)

function product(){
  if(thisProduct){
    return(
      <div className='product-detail-container'>
        <img className='product-detail-image' src={`${thisProduct.image}`} ></img>
        <div className='product-detail-description'>
          <h1>{thisProduct.title}</h1>
          <hr className='divider'></hr>
          <h2>{thisProduct.price} $</h2>
          <h3 className='size-title'>{t("size")}</h3>
          <div className='size-container'>
            {sizeElements}
          </div>
          <h3 className='description-title'>{t("description")}</h3>
          <p>{thisProduct.description}</p>
          <h3 className='quantity'>{t("quantity")}</h3>
          <div className='increment'>
          <h3 onClick={substract} className='increment-button'>-</h3>
            <h3>{quantity}</h3>
          <h3 onClick={add} className='increment-button'>+</h3>
          </div>
          <h2 className='total'>Total: {thisProduct.price * quantity}$</h2>
          <div className='buy-container'>
            <ReactWhatsapp number="+58 4121940547" message="Testing React Messages" className='buy-product-detail'>{t("buy")}</ReactWhatsapp>
            {/* <button className='add-product-detail'>ADD TO CART{cartIcon()}</button> */}
            {cartIcon()}
          </div>
        </div>
      </div>
    )
  }
}


  return (
    <div>
      <Nav open={handleMenu}/>
      {isMenuOpen && <Menu open={handleMenu}/>}
        {product()}
        
    </div>
  )
}

export default ProductsDetail