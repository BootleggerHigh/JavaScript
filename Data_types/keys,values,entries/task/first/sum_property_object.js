/*Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.*/


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries));


function sumSalaries(object) {
    if (Object.keys(object).length === 0) {
        return 0
    }
    return Object.entries(object).reduce((total, object) => total + object[1], 0);
}

