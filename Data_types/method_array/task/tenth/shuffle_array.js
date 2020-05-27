/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.*/

let arr = [1, 2, 3];

shuffle(arr);

alert(arr);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}