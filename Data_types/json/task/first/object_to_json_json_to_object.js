/*Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};*/



let user = {
    name: "Василий Иванович",
    age: 35
};

let user_final = JSON.parse(JSON.stringify(user));
console.log(user_final);