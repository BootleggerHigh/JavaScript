/*Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?*/


async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

async function f() {

   await wait().then(result =>alert(result));
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
}
