import React from 'react';
import reg from '../../assets/images/rolexg.png'
import google from '../../assets/images/google.png'
import micr from '../../assets/images/micr.png'
import apple from '../../assets/images/apple.png'
import slack from '../../assets/images/slack.jpeg'

const Registr = () => {
    const regis = [
        {img: google, text: 'Google', key: 1,},
        {img: micr, text: 'Microsoft', key: 2,},
        {img: apple, text: 'Apple', key: 3,},
        {img: slack, text: 'Slack', key: 4,},
    ]
    return (
        <div className='bg'>
            <div className="registr">
            <div className="registr__logo">
                <img src={reg} alt="Registr-logo" />
                <h1>Rolex</h1>
            </div>
            <h3>Зарегистрируйтесь, чтобы продолжить</h3>
            <input type="text" placeholder='Введите ваш адрес электронной почты'/>
            <span>Регистрируясь, я соглашаюсь с <abbr>Условиями использования продуктов Cloud</abbr> и принимаю <abbr>Политику конфиденциальности Atlassian.</abbr></span>
            <button>Зарегистрироваться</button>
            <h4 className='registr__text'>Или продолжить с помощью:</h4>
                {regis.map((el)=> (
                    <div className="registr__form" key={el.key}>
                        <img src={el.img} alt="" />
                        <p>{el.text}</p>
                    </div>
                ))}
                <a href="">Уже есть аккаунт Atlassian? Войти</a>
                <div className="registr__line"></div>
                <footer>
                    <img src="data:image/png;base64,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" alt="" />
                <b>Atlassian</b>
                </footer>
            </div>
        </div>
    );
};

export default Registr;