/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/


let calculator =
    {
        read() {
            this.first = +prompt('Введите первое число', '1');
            this.second = +prompt('Введите второе число', '2');
        },
        sum() {
            return this.first + this.second;
        },
        mul() {
            return this.first * this.second;
        },
    };

calculator.read();
alert(calculator.sum());
alert(calculator.mul());