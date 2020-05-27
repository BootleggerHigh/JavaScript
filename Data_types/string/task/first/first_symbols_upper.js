/*Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";*/

alert(usFirst('Вася'));

function usFirst(text) {
    return text[0].toUpperCase() + text.slice(1);
}