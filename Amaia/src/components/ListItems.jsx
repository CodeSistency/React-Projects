import React, { useContext } from 'react'
import { Context } from './Context'
import { AiOutlineEye } from 'react-icons/ai';
import {BiEditAlt} from 'react-icons/bi'
import { IoAddSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function ListItems() {

    const {data, removeFromCart} = useContext(Context)

    console.log(data)

    const listItems = data.map(item => (
        <div key={item.id} className='list-item'>
            <div className='list-item-description'>
                <div className='item-description-container'>
                    <div className='item-image'>
                        <img src={item.image}></img>
                        
                    </div>
                    <Link to={`/admin/edit/${item.id}`}>
                        <div style={{color: "#424242"}}>
                                <h4>Title: {item.title}</h4>
                                <h4>ID: {item.id}</h4>
                        </div>
                    </Link>
                </div>
                {/* <div className='item-image'>
                    <img src={item.image}></img>
                    
                </div>
                <div className='item-description'>
                        <h5>Title: {item.title}</h5>
                        <h5>ID: {item.id}</h5>
                </div> */}
                
                <div className='crud-icons'>
                    <Link to={`/admin/edit/${item.id}`}>
                        <div>
                            <BiEditAlt  style={{fontSize: "36px", color: "goldenrod"}}/>
                        </div>
                    </Link>
                    <div>
                        <AiOutlineEye  style={{fontSize: "36px"}}/>
                    </div>
                    <div>
                        <i className='ri-delete-bin-line' onClick={() => removeFromCart(item.id)} style={{color: "red"}}></i>
                    </div>
                </div>
            </div>
            
        </div>
    ))
  return (
    <div style={{width: "100%"}}>
        <div className='list-items-title'>
            <h1>List Items</h1>
            <Link to="/admin/add" className='add-item-button'>Add Item<IoAddSharp /></Link>
        </div>
        
        <hr />
        <div className='list-items-container'>
            {listItems}
        </div>
    </div>
  )
}

export default ListItems