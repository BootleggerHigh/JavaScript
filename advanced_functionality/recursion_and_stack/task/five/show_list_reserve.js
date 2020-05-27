/*Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.*/


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

printReverseList(list)
function  printReverseList(list)
{
    if(list.next)
    {
        printReverseList(list.next);
    }
    alert(list.value)
}