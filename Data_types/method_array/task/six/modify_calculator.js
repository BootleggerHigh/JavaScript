/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8*/


let calc = new Calculator;

alert(calc.calculate("3 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

alert(powerCalc.calculate('2 ** 2'));

function Calculator() {

    this.calculate_method = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    this.calculate = function (operation) {
        let fraction_operation = operation.split(' ');
        if (this.calculate_method[fraction_operation[1]] && fraction_operation[0] && fraction_operation[2]) {
            return this.calculate_method[fraction_operation[1]](fraction_operation[0], fraction_operation[2]);
        }
        return null;
    };
    this.addMethod = function (name, method) {
        this.calculate_method[name] = method;
    }
}