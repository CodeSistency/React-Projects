import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router';
import { Context } from './Context'

function AddItem() {
    const {data, addToProducts, updateItem} = useContext(Context)
    const [productsInfo, setProductsInfo] = useState({
        id: "",
        title:"",
        price: "",
        image: "",
        category: "",
        description: ""

    })

    const navigate = useNavigate();

    const location = useLocation();
    const array = location.pathname.split("/admin/edit/")
    const string = array[1]
    const id = parseInt(string)

    // C:\\fakepath\\

    useEffect(()=> {
        const thisProduct = data.find((product) => product.id == id)
        if(thisProduct){
            setProductsInfo({
                id: thisProduct.id,
                title: thisProduct.title,
                price: thisProduct.price,
                image: thisProduct.image,
                category: thisProduct.category,
                description: thisProduct.description
            })
        }
    }, [id, data])


    console.log(productsInfo)
    console.log(data)

    function handleSubmit(e){
        e.preventDefault();
        if(!productsInfo.id){
            addToProducts(productsInfo);
        }else{
            updateItem(productsInfo)
        }
        navigate("/admin")
    }

    function handleChange(e){
        setProductsInfo({ ...productsInfo, [e.target.name]: e.target.value });
    }
  return (
    <div className='add-item-container'>
        <div className='add-item'>
            <h1>{productsInfo.id ? "Update " : "Create "}A Task</h1>
            <form onSubmit={handleSubmit}>
                <label>ID: </label>
                <input value={productsInfo.id} onChange={handleChange} name="id"></input>
                <label>Title: </label>
                <input name="title" value={productsInfo.title} onChange={handleChange} type="text" />
                <label>Price: </label>
                <input name="price" value={productsInfo.price} onChange={handleChange} type="number"></input>
                <label>Category: </label>
                <select onChange={handleChange} name="category" value={productsInfo.category} >
                    <option value="Select Category">Select Category</option>
                    <option>Men</option>
                    <option>Women</option>
                </select>
                <label>Image: </label>
                <input name="image" value={productsInfo.image} onChange={handleChange} type="file" className='custom-file-input' size="60"></input>
                <label>Description: </label>
                <textarea id="" cols="30" rows="3" name="description" value={productsInfo.description} onChange={handleChange} placeholder='Put description product'></textarea>
                <input type="submit" />
            </form>
        </div>
    </div>
  )
}

export default AddItem