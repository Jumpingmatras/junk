'use strict';

fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => {
        console.log('--------\nПункт №1\n--------');
        console.log('Data received');
        return response.json();
    })
    .then((body) => {
        console.log('\n--------\nПункт №2\n--------');
        body.data.forEach((item) => {
            console.log(item.last_name);
        });
        return body;
    })
    .then((body) => {
        console.log('\n--------\nПункт №3\n--------');
        // Спасибо, закрасивело!
        body.data.forEach(item => {
            item?.last_name[0] === 'F' &&
            Object.entries(item).forEach(([key, value]) => {
                console.log(key, value);
                });
        });
        return body;
    })
    .then((body) => {
        console.log('\n--------\nПункт №4\n--------');
        const str = body.data.reduce((acc, item) => {
            return acc + (item.first_name + ' ' + item.last_name + ', ')
        }, '').slice(0, -2);
        console.log('Наша база содержит данные следующих пользователей: ' + str + '.' );
        return body;
    })
    .then((body) => {
        console.log('\n--------\nПункт №5\n--------');
        Object.keys(body.data[0]).forEach(key => console.log(key));
    })
    .catch((e) => {
        console.log('Fatality');  // С обработкой ошибок я не дожал. Пока так
    })
























