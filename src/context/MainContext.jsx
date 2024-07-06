import  { createContext, useContext } from 'react';
import  { useEffect, useState } from 'react';
import axios from 'axios';

const mainContext = createContext()
export const useMainContext = () => useContext(mainContext)

const MainContext = ({ children }) => {
    const [product,setProduct] = useState([])
    const [favour,setFavour] = useState([])
    const [basket, setBasket] = useState([])
    const [card,setCard] = useState([])
    
    const getProd = async () => {
        const { data } = await axios('https://665c0e4d3e4ac90a04d88f40.mockapi.io/items')
        setProduct(data)

        const   datas  = await axios.get('https://665c0e4d3e4ac90a04d88f40.mockapi.io/cart')
        setCard(datas.data)

    }
    const deleteProduct = (id) => {
        axios.delete(`https://665c0e4d3e4ac90a04d88f40.mockapi.io/cart/${id}`)
        setCard('')
    }
    const favouriteDelete = (id)=> {
        setFavour((prev)=> prev.filter((el)=> el.id !== id))
    }
    const  checkFavouriteBtn = (id)=> {
        let bskt = product.find((el)=> el.id === id)
        setFavour([...favour, bskt])
    }
    const removeFavouriteBtn = (id)=> {
        let fav = favour.filter((el)=> el.id !== id)
        setFavour(fav)
    } 
    const checkBasketBtn = (id)=> {
        let favourite = product.find((el)=> el.id === id)
        if (basket.find((item)=> item.id === favourite.id)) { 
            setBasket((prev)=> prev.filter((elem)=> elem.id !== id))
            // axios.delete('https://665c0e4d3e4ac90a04d88f40.mockapi.io/cart', id)
        } else{
            const cart = axios.post('https://665c0e4d3e4ac90a04d88f40.mockapi.io/cart', favourite)
            setBasket([...basket, favourite])
            setCard(cart)
        }
     }
    const removeBasketBtn = (id)=> {
        let favourite = basket.filter((el)=> el.id !== id)
        setBasket(favourite)
    }
    const deleteFunction = (id)=> {
        setProduct((prev)=> prev.filter((el)=> el.id !== id))
    }
    useEffect(()=> {
        getProd()
    },[])

    const values = {
        product,
        basket,
        favour,
        card,
        basket,
        checkFavouriteBtn,
        removeFavouriteBtn,
        checkBasketBtn,
        deleteFunction,
        removeBasketBtn,
        deleteProduct,
        favouriteDelete
    }
    return (
        <mainContext.Provider value={values}>
            {children}
        </mainContext.Provider>
    ); 
};

export default MainContext;