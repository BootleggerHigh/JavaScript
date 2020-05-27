/*Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/


let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


function Calculator() {
    this.read = function () {
        this.first = +prompt('Введите первое число', '1');
        this.second = +prompt('Введите второе число', '2');
    }

    this.sum = function () {
        return this.first + this.second;
    }
    this.mul = function () {
        return this.first * this.second;
    }
}