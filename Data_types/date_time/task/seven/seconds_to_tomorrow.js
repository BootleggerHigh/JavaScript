/*Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600*/


//(hour * 60 + minutes) * 60 + seconds;
alert(getSecondsToday());


function getSecondsToday() {
    let current_date = new Date();
    return  86400 - ((current_date.getHours() * 60 +current_date.getMinutes()) * 60 + current_date.getSeconds());
}

