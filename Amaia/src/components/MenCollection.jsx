import React, { useContext } from 'react'
import Card from './Card'
import { Context } from './Context'
import Nav from './Nav'

function MenCollection(props) {

    const {data} = useContext(Context)

  
    const men = data.map(item => {
        if(item.category === "men's clothing"){
            return(
                <Card key={item.id} product={item}/>
            )
        }
    })
    console.log(men)

  return (
  <div>
    <Nav />
    <div className='card-product-container'>
        {men}
    </div>
  </div>  
  )
}

export default MenCollection