/*У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.*/


let vasya = {name: "Вася", surname: "Пупкин", id: 1};
let petya = {name: "Петя", surname: "Иванов", id: 2};
let masha = {name: "Маша", surname: "Петрова", id: 3};

let users = [vasya, petya, masha];

let usersMapped = convert_to_object(users);

alert(usersMapped[0].id);
alert(usersMapped[0].fullname);

function convert_to_object(array) {
    return array.map(element => ({
        fullname: `${element.name} ${element.surname}`,
        id: element.id
    }));
}