/*Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.
Формула : next = previous * 16807 % 2147483647
* */


function* pseudoRandom(number) {
    let value = number;
    while(true)
    {
        value*=16807 % 2147483647;
        yield value;
    }
}


const generator = pseudoRandom(1);

alert(generator.next().value);
alert(generator.next().value);
alert(generator.next().value);