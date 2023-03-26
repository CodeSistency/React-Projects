import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next'
const Context = React.createContext()

function ContextProvider({children}) {
    

    const [data, setData] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t, i18n } = useTranslation();
    // const [updatedProduct, setUpdatedProduct] = useState()

    useEffect(() => {

    fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(response => setData(response))
    }, [])

    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
        
    }

    function addToProducts(newItem){
        
        setData(prevItems => [...prevItems, newItem])
    }

    function updateItem(item){
        const updated = item

        const updatedItems = data.map(product => {
            if(product.id === parseInt(updated.id)){
                return updated
                
            }
            return product
        })

        // setData(updatedItems)
        // return {
        //     ...data,
        //     tasks: updatedTasks,
        //   };



        setData(prevItems => updatedItems)
        console.log(updated)
        console.log(updatedItems)
        
    }

    // function updateItem(item){
    //     setUpdatedProduct(item)
    // }

    // console.log(data)

    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
        setData(prevItems => prevItems.filter(item => item.id !== id))
    }
    function clearAll(){
        setCartItems([])
    }

    function handleMenu(){
        setIsMenuOpen(prev => !prev)
        console.log("cliked")
      }

    const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	};

    

  return (
    <Context.Provider value={{data, cartItems, isMenuOpen, handleChangeLng, handleMenu, addToCart, removeFromCart, clearAll, addToProducts, updateItem}}>
        {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}