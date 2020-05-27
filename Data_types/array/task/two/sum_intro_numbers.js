/*Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

alert(sumInput());

function sumInput() {
    let array_numbers = [];
    let sum_array = 0;
    let user_input_number = prompt('Введите значения', '0');
    while (user_input_number && isFinite(user_input_number)) {
        array_numbers.push(user_input_number);
        user_input_number = prompt('Введите значения', '0');
    }
    for (let element of array_numbers) {
        sum_array += +element;
    }
    return sum_array;
}