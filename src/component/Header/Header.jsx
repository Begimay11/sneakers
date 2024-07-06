import React from 'react';
import { SlBasket } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import rolex from '../../assets/images/rolex.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate()
    return (
        <header>
            <div className="container">
            <div className="header">
                <div className="header__nav" onClick={()=> navigate('/')}>
                <img src={rolex} alt="" className='nav__img'/>
               <div className="text">
               <h2 className='text-uppercase'>Rolex sneakers</h2>
                <p>Магазин лучших кроссовок</p>
               </div>
                </div>
                <div className="header__block">
                    <NavLink to='/basket'><SlBasket/></NavLink>
                <NavLink to='/favourite'><FaRegHeart/></NavLink>
                {/* <FaUserAlt/> */}
               <NavLink to='/admin'> <FaUserAlt/></NavLink>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;