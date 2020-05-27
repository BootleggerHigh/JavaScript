/*Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее
до 1. Факториал n обозначается как n!*/




alert( factorial(5) );


function factorial(number) {
    return number === 1 ? number : number * factorial(number-1)
}