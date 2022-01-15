import './LoginPage.css'
// import {useForm} from "react-hook-form";


function LoginPage() {

    return (
        <div className={'login__form'}>
            <div className="form__wrapper">
                <form method="POST" action="/submit" target="_blank">
                    <div className="form__title">Войти в аккаунт</div>
                    <div className="form__item-wrapper">
                        <label className="star-label_1" id="mailStar" htmlFor="mail-input">*</label>
                        <label className="input-label" id="mailLabel" htmlFor="mail-input">Email</label>
                        <input className="form__input" id="mail-input" type="email" placeholder="Введите email"
                               required/>
                            <label className="mail-alarm" id="mailLabelAlarm" htmlFor="mail-input">Поле обязательно для
                                заполнения</label>
                    </div>
                    <div className="form__item-wrapper form__item-wrapper_pass">
                        <label className="star-label_2" id="passStar" htmlFor="password-input">*</label>
                        <label className="input-label" id="passLabel" htmlFor="password-input">Пароль</label>
                        <input className="form__input" id="password-input" type="password" placeholder="Введите пароль"
                               maxLength="10" minLength="8" required/>
                            <label className="password-alarm" id="passLabelAlarm" htmlFor="password-input">Поле
                                обязательно для заполнения</label>
                    </div>

                    <div className="form__item-wrapper form__item-wrapper_button">
                        <button type="submit" className="form__button">Войти</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;