'use strict'

function makeFibonacciFunction() {
    let f = 0;
    let fN1 = f;
    let fN2 = 1;
    return increaseCount;
    function increaseCount() {
            f = fN1 + fN2;
            fN2 = fN1;
            fN1 = f;
            console.log(f);
        }
    }

const fibonacci = makeFibonacciFunction();

fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 2
fibonacci(); // Вывод в консоль: 3
fibonacci(); // Вывод в консоль: 5
fibonacci(); // Вывод в консоль: 8
fibonacci(); // Вывод в консоль: 13
fibonacci(); // Вывод в консоль: 21
fibonacci(); // Вывод в консоль: 34
fibonacci(); // Вывод в консоль: 55
fibonacci(); // Вывод в консоль: 89
fibonacci(); // Вывод в консоль: 144
fibonacci(); // Вывод в консоль: 233
fibonacci(); // Вывод в консоль: 377
fibonacci(); // Вывод в консоль: 610
fibonacci(); // Вывод в консоль: 987
fibonacci(); // Вывод в консоль: 1597
fibonacci(); // Вывод в консоль: 2584

console.log('\n***---------Теперь со звездочкой---------***\n\n')

const fibonacciStar = (function () {
    let f = 0;
    let fN1 = f;
    let fN2 = 1;
    return increaseCount;
    function increaseCount() {
        f = fN1 + fN2;
        fN2 = fN1;
        fN1 = f;
        console.log(f);
    }
})()

fibonacciStar(); // Вывод в консоль: 1
fibonacciStar(); // Вывод в консоль: 1
fibonacciStar(); // Вывод в консоль: 2
fibonacciStar(); // Вывод в консоль: 3
fibonacciStar(); // Вывод в консоль: 5
fibonacciStar(); // Вывод в консоль: 8
fibonacciStar(); // Вывод в консоль: 13
fibonacciStar(); // Вывод в консоль: 21
fibonacciStar(); // Вывод в консоль: 34
fibonacciStar(); // Вывод в консоль: 55
fibonacciStar(); // Вывод в консоль: 89
fibonacciStar(); // Вывод в консоль: 144
fibonacciStar(); // Вывод в консоль: 233
fibonacciStar(); // Вывод в консоль: 377
fibonacciStar(); // Вывод в консоль: 610
fibonacciStar(); // Вывод в консоль: 987
fibonacciStar(); // Вывод в консоль: 1597
fibonacciStar(); // Вывод в консоль: 2584