/*Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.*/

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O",
];

alert(unique(strings));

function unique(array) {
    let unique_elements = [];
    for (let elements of array) {
        if (!unique_elements.includes(elements)) {
            unique_elements.push(elements);
        }
    }
    return unique_elements;
    //return Array.from(new Set(array));
}