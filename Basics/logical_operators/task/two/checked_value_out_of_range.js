/*
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

/*
SUCCESS
let age = 91;
let age = 13
*/

/*
FAILED
let age = 90;
let age = 14;
*/

let age = 14;

if(!(age >= 14 && age<=90))
{
    alert(age);
}

if(age < 14 || age>90)
{
    alert(age);
}