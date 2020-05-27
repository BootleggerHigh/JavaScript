/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) = 5
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0*/


alert(getMaxSubSum([-1, 2, 3, -9, 11]));


function getMaxSubSum(arr) {
    let max_sub = 0;
    let current_item_sub = 0;

    for (let element of arr) {
        current_item_sub += element;
        max_sub = Math.max(max_sub, current_item_sub);
        if (current_item_sub < 0) {
            current_item_sub = 0;
        }
    }
    return max_sub;
}