import { FaRegHeart } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaSquareCheck } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useMainContext } from "../../context/MainContext";
import { useEffect, useState } from "react";
import axios from "axios";

const Items = ({ el }) => {
    const { checkFavouriteBtn,checkBasketBtn, basket, removeBasketBtn, removeFavouriteBtn, favour,deleteFunction } = useMainContext()
    const [backetBtn,setBasketBtn] = useState(false)
    const [favourites,setFavourites] = useState(false)

    useEffect(() => {
        setBasketBtn(Boolean(basket.find((elem) => elem.id === el.id)))
    }, [basket]) 

    useEffect(()=> {
        setFavourites(Boolean(favour.find((elem)=> elem.id === el.id)))
    },[favour])

    return (
        <>
           <div className="box">
                      <button className='box__heart' onClick={() => favourites ? removeFavouriteBtn(el.id) : checkFavouriteBtn(el.id)}>{favourites ?  <FaHeart/> : <FaRegHeart />}</button>
                    <img src={el.img} alt="IMG" />
                    <div className="box__sneakers">
                    <h2>{el.name}</h2>
                    <p>{el.title}</p>
                    </div>
                    <div className="box__line"></div>
                    <div className='box__price'>
                        <p>{el.lkdlavnlms}</p>
                        <p>{el.price}</p>
                        <button onClick={()=> backetBtn ? removeBasketBtn(el.id) : checkBasketBtn(el.id)}>{ backetBtn ? <FaSquareCheck/> : <GoPlus/>}</button>
                        <button onClick={()=> deleteFunction(el.id)}>Delete</button>
                    </div>
                </div> 
        </>
    )
};

export default Items;