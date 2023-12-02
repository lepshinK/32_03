var month = prompt('Введите месяц').toLowerCase()
switch (month) {
    case 'декабрь':
        alert('Зима: Декабрь')
        break
    case 'январь':
        alert('Зима: Январь')
        break
    case 'февраль':
        alert('Зима: Февраль')
        break
    case 'март':
        alert('Весна: Март')
        break
    case 'апрель':
        alert('весна: Апрель')
        break
    case 'май':
        alert('Весна: Май')
        break
    case 'июнь':
        alert('Лето: Июнь')
        break
    case 'Июль':
        alert('Лето: Июль')
        break
    case 'фвгуст':
        alert('Лето: Август')
        break
    case 'сентябрь':
        alert('Осень: Сентябрь')
        break
    case 'октябрь':
        alert('Осень: Октябрь')
        break
    case 'ноябрь':
        alert('Оснень: Ноябрь')
        break
    default:
        alert("Нужно выбрать месяц: Январь, Февраль, Март...")
}
function calculate() {
    var num1 = parseFloat(prompt("Введите первое число:"));
    var num2 = parseFloat(prompt("Введите второе число:"));
    var operation = prompt("Выберите операцию: +, -, *, или /");
    var result;

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Ошибка: неправильная операция";
    }

    alert("Результат: " + result);
}

calculate();
