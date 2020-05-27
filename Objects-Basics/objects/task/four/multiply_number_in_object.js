/*Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};*/


let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

isEmpty(menu) ? alert('Пуст') : multiplyNumeric(menu);

console.log(menu);


function isEmpty(object) {
    return !Object.keys(object).length;
}


function multiplyNumeric(object) {
    for (let prop in object) {
        if (typeof (object[prop]) === 'number') {
            object[prop] *= 2;
        }
    }
}