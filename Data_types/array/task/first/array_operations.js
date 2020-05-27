/*Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:*/

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles.splice(styles.length / 2, 1, 'Классика');

alert(styles.shift());

styles.unshift('Рэп', 'Регги');
