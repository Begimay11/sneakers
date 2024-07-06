import { GrLinkNext } from "react-icons/gr";
import { useMainContext } from "../../context/MainContext";

const BasketBlog = () => {
    const { card, deleteProduct } = useMainContext()
   
    return (
        <main>
             <div className='basket'>
            <h1>Корзина</h1>
            {card.map((el)=> (
                <div className="basket__box">
                <img src={el.img} alt="Sneakers"/>
                <div className='basket__box__text'>
                    <h3>{el.name}</h3>
                    <span>{el.price}$</span>
                </div>
                <button onClick={()=> deleteProduct(el.id)}>x</button>
            </div>
            ))}
          <div className="basket__auto">
          <div className="basket__itog">
           <h4>Итого:</h4>
           <div className="basket__lines"></div>
            <h3>21490$</h3>
           </div>
           <div className="basket__itog">
           <h4>Налог 5%:</h4>
           <div className="basket__lines"></div>
            <h3>2190$</h3>
           </div>
          </div>
           <button className="basket__order">Оформить заказ <GrLinkNext className="basket__order__icons"/></button>
        </div>
        </main>
    );
};

export default BasketBlog;

// SEO-> poiskovaya sistema