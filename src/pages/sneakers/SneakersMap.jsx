import { CiSearch } from "react-icons/ci";
import Items from './Items';
import { BsX } from "react-icons/bs";
import { useMainContext } from '../../context/MainContext';
import { useState } from "react";


const SneakersMap = () => {
    const [searchInputValue,setSearchInputValue] = useState('')
    const { product }  = useMainContext()

    const searchInputClick  = (e)=> {
        setSearchInputValue(e.target.value)
    }
    return (
        <div>
            <div className="container">
            <div className='navlist'>
            <h1>{searchInputValue ? `Поиск по запросу: ${searchInputValue}` : 'Все кроссовки'}</h1>
            <div className="navlist__search">
            <CiSearch className="searchs"/>
            {searchInputValue &&  <BsX className="crest" onClick={()=> setSearchInputValue('')}/>}
            <input type="text" placeholder='Поиск...' value={searchInputValue} onChange={searchInputClick}/>
            </div>
           
            </div>
            <div className="sneakers-blog">
                {product.filter((item)=> item.name.toLowerCase().includes(searchInputValue.toLowerCase()))
                .map((el,index)=> (
                    <Items el={el} index={index}/>
                ))}
                    </div>
                </div> 
            </div>
    );
};

export default SneakersMap;