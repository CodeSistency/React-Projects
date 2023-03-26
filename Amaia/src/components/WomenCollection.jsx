import React, { useContext } from 'react'
import Card from './Card'
import { Context } from './Context'
import Nav from './Nav'

function WomenCollection(props) {

    const {data} = useContext(Context)

    const women = data.map(item => {
        if(item.category === "women's clothing"){
            return (
                <Card key={item.id} product={item}/>
            )
        }
    })
    

  return (
   <div>
       <Nav /> 
        <div className='card-product-container'>
            {women}
        </div>
   </div> 
  )
}

export default WomenCollection