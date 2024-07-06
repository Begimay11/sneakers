import BasketBlog from '../pages/baskets/BasketBlog';
import { Route, Routes } from 'react-router-dom';
import SneakersMap from '../pages/sneakers/SneakersMap';
import Registr from '../pages/registr/Registr';
import FavoriteSneakers from '../pages/favourites/FavoriteSneakers';

const Routess = () => {
    const RouteSneakers = [
        {key: 1, path:'/basket',  element: <BasketBlog/> },
        {key: 2, path:'/',  element: <SneakersMap/> },
        {key: 3, path:'/favourite',  element: <FavoriteSneakers/> },
        {key: 4, path:'/admin',  element: <Registr/> },
    ]
    return (
        <div>
            <Routes>
            {RouteSneakers.map((el)=> (
                <Route path={el.path} element={el.element} key={el.key}/>
            ))}
            </Routes>
        </div>
    );
};

export default Routess;