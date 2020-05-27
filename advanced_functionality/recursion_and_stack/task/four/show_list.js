/*Допустим, у нас есть односвязный список:

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.*/


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


printList(list);


// function printList(list) {
//     while (list)
//     {
//         alert(list.value);
//         list= list.next;
//     }
// }

function printList(list) {
    alert(list.value);
    if (list.next) {
        printList(list.next);
    }
}