/*Напишите функцию count(obj), которая возвращает количество свойств объекта:*/


let user = {
    name: 'John',
    age: 30,
    '1': 1,
};

alert(count(user)); // 2

function count(object) {
    return Object.keys(object).length;
}