import './Footer.css';
import call from './img/call.svg';
import instagram from './img/logo-instagram.svg';
import youtube from './img/logo-youtube.svg';
import {useState} from "react";
import classNames from "classnames";

function Footer() {
    const [ classNum, setClassNum ] = useState(3);

    return (
        <footer className={'footer'}>
            <div className={'footer_navigation'}>
                <ul>
                    <li></li>
                    <li className={classNames('list',{
                        'active2': classNum === 0,
                        '': classNum !== 0 || classNum === 3
                    })}>
                        <a href={'https://www.instagram.com/airbeautyballoons/?hl=ru'} target={'_blank'} rel={'nofollow noopener noreferre'} className={'link footer__link'}>
                            <span className={'text'}>Instagram</span>
                            <span className={'icon'}>
                        <img src={instagram} width="45" height="45" alt="Instagram" title="Мы в Instagram"
                             onMouseEnter={function (event){setClassNum(0)}}
                             onMouseOut={function (event){setClassNum(3)}}/>
                    </span>
                        </a>
                    </li>
                    <li className={classNames('list',{
                        'active2': classNum === 1,
                        '': classNum !== 1
                    })}>
                        <a href={'https://www.youtube.com/watch?v=Cl1SljbpzPs'} target={'_blank'} rel={'nofollow noopener noreferre'} className={'link footer__link'}>
                            <span className={'text'}>Youtube</span>
                            <span className={'icon'}>
                        <img src={youtube} width="45" height="45" alt="Yotube" title="Мы в Youtube"
                             onMouseEnter={function (event){setClassNum(1)}}
                             onMouseOut={function (event){setClassNum(3)}}/>
                    </span>
                        </a>
                    </li>
                    <li className={classNames('list',{
                        'active2': classNum === 2,
                        '': classNum !== 2
                    })}>
                        <a href="tel:+223322223322">
                            <span className={'text'}>Звонок</span>
                            <span className={'icon'}>
                        <img src={call} width="45" height="45" alt="Звонок" title="Позвонить нам"
                             onMouseEnter={function (event){setClassNum(2)}}
                             onMouseOut={function (event){setClassNum(3)}}/>
                    </span>
                        </a>
                    </li>
                    <li></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;