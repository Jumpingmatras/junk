
import style from './Header.css';
import {Link} from "react-router-dom";
import home from './img/home.svg';
import cart from './img/cart.svg';
import login from './img/login.svg';
import info from './img/info.svg';
import diploma from './img/diploma.svg';
import {useState} from "react";
import classNames from "classnames";

function Header() {
    // const active = useSelector((state) => state.activ.value);
    const [ classNum, setClassNum ] = useState(0);

    return (
        <header className={'header'}>
            <div className={'navigation'}>
                <ul>
                    <li className={classNames('list',{
                        'active': classNum === 0,
                        '': classNum !== 0
                    })}
                        onClick={function (event){setClassNum(0)}}>
                        <Link to={'market'} className={'link header__link'}>
                            <span className={'text'}>Магазин</span>
                            <span className={'icon'}>
                        <img src={home} width="45" height="45" alt="Домой" title="Домой"/>
                    </span>
                        </Link>
                    </li>
                    <li className={classNames('list',{
                        'active': classNum === 1,
                        '': classNum !== 1
                    })}
                        onClick={function (event){setClassNum(1)}}>
                        <Link to={'basket'} className={'link header__link'}>
                            <span className={'text'}>Корзина</span>
                            <span className={'icon'}>
                        <img src={cart} width="45" height="45" alt="Корзина" title="Корзина"/>
                    </span>
                        </Link>
                    </li>
                    <li className={classNames('list',{
                        'active': classNum === 2,
                        '': classNum !== 2
                    })}
                        onClick={function (event){setClassNum(2)}}>
                        <Link to={'login'} className={'link header__link'}>
                            <span className={'text'}>Логин</span>
                            <span className={'icon'}>
                        <img src={login} width="45" height="45" alt="Авторизация" title="Авторизация"/>
                    </span>
                        </Link>
                    </li>
                    <li className={classNames('list',{
                        'active': classNum === 3,
                        '': classNum !== 3
                    })}
                        onClick={function (event){setClassNum(3)}}>
                        <Link to={'about'} className={'link header__link'}>
                            <span className={'text'}>О нас</span>
                            <span className={'icon'}>
                        <img src={info} width="45" height="45" alt="О нас" title="О нас"/>
                    </span>
                        </Link>
                    </li>
                    <li className={classNames('list',{
                        'active': classNum === 4,
                        '': classNum !== 4
                    })}
                        onClick={function (event){setClassNum(4)}}>
                        <Link  to={'about'} className={'link header__link'}>
                            <span className={'text'}>Диплом</span>
                            <span className={'icon'}>
                        <img src={diploma} width="45" height="45" alt="Диплом" title="Диплом"/>
                    </span>
                        </Link>
                    </li>
                    <div className={'indicator'}></div>
                </ul>
            </div>
        </header>
    )
}

export default Header;

////////----------------
// function Header () {
//     return (
//         <header className={'header'}>
//             <h1 className={'header__title'}>
//                 <Link to={'/'} className={'link'}>Магазин воздушных шаров</Link>
//             </h1>
//             <div className={'header_links'}>
//                 <Link to={'users'} className={'link header__link'}>Users</Link>
//             </div>
//         </header>
//     )
// }
//
// export default Header;