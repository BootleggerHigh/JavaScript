/*Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.*/

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};

let arr = [vasya, petya, masha];

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);

function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}