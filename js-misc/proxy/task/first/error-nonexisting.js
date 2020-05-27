/*Обычно при чтении несуществующего свойства из объекта возвращается undefined.

Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.

Это может помочь обнаружить программные ошибки пораньше.

Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности.*/


let user = {
  name : 'John',
};

function wrap(target) {
    return new Proxy(target,{
        get(target, p, receiver) {
            if(p in target)
            {
                return  Reflect.get(...arguments);
            }
            else {
                return  'Ошибка : такого свойства не существует';
            }
        }
    })
}

user = wrap(user);
alert(user.name);
alert(user.age);
