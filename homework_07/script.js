let firstNumber = Number(inputNumber('Первое число'));
let mathOperator = inputOperator('Оператор');
let secondNumber = Number(inputNumber('Второе число'));
let result;

switch (mathOperator) {
    case '+' : {
        result = firstNumber + secondNumber;
        break;
    }
    case '-' : {
        result = firstNumber - secondNumber;
        break;
    }
    case '*' : {
        result = firstNumber * secondNumber;
        break;
    }
    case '/' : {
        result = firstNumber / secondNumber;
        break;
    }
}
console.log(result);
alert('Калькулируем выражение: ' + firstNumber + mathOperator + secondNumber
    + '\n' + 'Результат: ' + result);

function inputNumber(inputText) {
    let number;
    while (true) {
        number = prompt('Введите '
            + inputText.toLowerCase()
            + ': ', '').replaceAll(/\s/g, '');
        switch (number) {
            case '':
                alert(inputText + ' не указано.');
                break;
            default:
                if (isNaN(number)) {
                    alert('Некорректный ввод чисел');
                    break;
                } else {
                  return number;
                }
        }
    }
}

function inputOperator(inputText) {
    let operator;
    while (true) {
        operator = prompt('Введите ' + inputText.toLowerCase() + ': ', '').trim();

        switch (operator) {
            case '':
                alert('Не введён знак');
                break;
            default:
                if (operator == '*' || operator == '+' || operator == '/' || operator == '-') {
                    return operator;
                } else {
                    alert('Программа не поддерживает такую операцию');
                }
        }
    }
}