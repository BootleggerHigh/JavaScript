/*let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

alert(topSalary(salaries));

function topSalary(salary) {

    if (Object.values(salary).length === 0) {
        return null;
    }

    let max_salary = 0;
    let current_name = '';

    for (const [name, current_salary] of Object.entries(salary)) {
        if (max_salary < current_salary) {
            max_salary = current_salary;
            current_name = name;
        }
    }
    return current_name;
}