import React, {useContext} from 'react'
import { Context } from './Context'
import {Link} from "react-router-dom"
import Card from './Card'
import Nav from './Nav'

function Products() {

  const {data} = useContext(Context)


  const products =  data.map((product, index) => {
    return(
      <Card key={product.id} product={product} />

    )
  })
  return (
    <div>
      <Nav />
      <div className='card-product-container'>
          {products}
      </div>
    </div>
  )
}

export default Products