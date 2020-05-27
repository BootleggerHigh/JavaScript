/*Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.*/





alert(sumTo(100));


// function sumTo(number) {
//     let sum = 0;
//     for (let i = number; i >= 0; i--)
//     {
//         sum+=i;
//     }
//     return sum;
// }

// function sumTo(number) {
//     return number === 0 ? number : number + sumTo(number-1);
// }

function sumTo(number) {
    return number * (number+1)/2;
}