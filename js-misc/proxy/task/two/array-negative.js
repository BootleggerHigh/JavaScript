/*В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые
 с конца. Создайте прокси, который реализовывал бы такое поведение.*/


let array = [1, 2, 3];
array = new Proxy(array, {
    get(target, p, receiver) {
        if (p < 0) {
            p = +p + target.length;
            return Reflect.get(...arguments);
        } else {
             throw  new Error('Упс');
        }
    }
});


alert(array[-1]);
alert(array[1]);
