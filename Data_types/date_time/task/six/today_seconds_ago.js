/*Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/


alert(getSecondsToday());


function getSecondsToday() {
    let current_date = new Date();
    return current_date.getHours() * 3600 + current_date.getMinutes() * 60 + current_date.getSeconds();
}

