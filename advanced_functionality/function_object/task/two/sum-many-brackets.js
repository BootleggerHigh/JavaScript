/*Напишите функцию sum, которая бы работала следующим образом:*/



function sum(a) {
    let sum_current = a;
    function sum_second(b) {
        sum_current+=b;
        return sum_second;
    }
    sum_second.toString = () => sum_current;
    return sum_second;
}

alert(sum(1)(2)(12)(12));