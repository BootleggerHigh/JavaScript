/*Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.*/





alert(sum(1)(2))


function sum(number) {
    return  function sum_2(number2) {
        return number + number2;
    }
}