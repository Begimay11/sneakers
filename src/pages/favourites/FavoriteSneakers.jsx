import React from 'react';
import { useMainContext } from '../../context/MainContext';

const FavoriteSneakers = () => {
    const { favour, favouriteDelete } = useMainContext()

    return (
        <div className='container'>
                <div className='favourite'>
                <h1>Favorites</h1>
                {favour.map((el)=> (
                <div className="basket__box">
                <img src={el.img} alt="Sneakers" />
                    <div className='basket__box__text'>
                        <h3>{el.name}</h3>
                        <span>{el.price}$</span>
                    </div>
                <button onClick={()=> favouriteDelete(el.id)}>x</button>
            </div>
             ))}
            </div>
        </div>
    );
};
 
export default FavoriteSneakers;