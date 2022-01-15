'use strict';
let usersRegData = {
    email: '',
    password: '',
};

let mailChecker = 0;
let passwordChecker = 0;
let checkBoxChecker = 0;

document.querySelector('[id="mail-input"]').addEventListener('focusout', (event) =>
    usersRegData.email = event.target.value);

document.querySelector('[id="password-input"]').addEventListener('focusout', (event) =>
    usersRegData.password = event.target.value);

let mailLabelAlarm = document.getElementById('mailLabelAlarm');
let passLabelAlarm = document.getElementById('passLabelAlarm');
let checkAgree = document.querySelector('[id="input-checkbox"]');


document.querySelector('.form__button').addEventListener('click', (event) => {

    if (validateEmail(usersRegData.email) && usersRegData.email !== '') {
        mailLabelAlarm.style.opacity = defaultStatus;
        document.getElementById('mailLabel').style.color = defaultStatus;
        document.getElementById('mailStar').style.color = defaultStatus;
        document.getElementById('mail-input').style.borderColor = defaultStatus;
        mailChecker = 1;
    } else {
        mailLabelAlarm.innerHTML = 'Email невалидный';
        mailLabelAlarm.style.opacity = '1';
        document.getElementById('mailLabel').style.color = '#CB2424';
        document.getElementById('mailStar').style.color = '#CB2424';
        document.getElementById('mail-input').style.borderColor = '#CB2424';
        mailChecker = 0;
        if (usersRegData.email === '') {
            mailLabelAlarm.innerHTML = 'Поле обязательно для заполнения';
        }
    }

    if (usersRegData.password.length >= 8) {
        passLabelAlarm.style.opacity = defaultStatus;
        document.getElementById('passLabel').style.color = defaultStatus;
        document.getElementById('passStar').style.color = defaultStatus;
        document.getElementById('password-input').style.borderColor = defaultStatus;
        passwordChecker = 1;
    } else {
        passLabelAlarm.innerHTML = 'Пароль должен содержать как минимум 8 символов';
        passLabelAlarm.style.opacity = '1';
        document.getElementById('passLabel').style.color = '#CB2424';
        document.getElementById('passStar').style.color = '#CB2424';
        document.getElementById('password-input').style.borderColor = '#CB2424';
        passwordChecker = 0;
        if (usersRegData.password === '') {
            passLabelAlarm.innerHTML = 'Поле обязательно для заполнения';
        }
    }

    if (!checkAgree.checked) {
        document.getElementById('checkLabelAlarm').style.opacity = '1';
        document.getElementById('checkStar').style.color = '#CB2424';
        document.getElementById('checkBox').style.borderColor = '#CB2424';
        checkAgree.innerHTML = 'Поле обязательно для заполнения';
        checkBoxChecker = 0;
    } else {
        document.getElementById('checkLabelAlarm').style.opacity = defaultStatus;
        document.getElementById('checkStar').style.color = defaultStatus;
        document.getElementById('checkBox').style.borderColor = defaultStatus;
        checkBoxChecker = 1;
    }
    event.preventDefault();
    if (mailChecker === 1 && passwordChecker === 1 && checkBoxChecker === 1) {
        Object.entries(usersRegData).forEach(([key, value]) => console.log(key + ': ', value));

    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}