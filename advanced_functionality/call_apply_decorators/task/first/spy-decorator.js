/*Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.*/


function work(a, b) {
    alert( a + b ); // произвольная функция или метод
}


function spy(func)
{
    function func_arguments(...args) {
        func_arguments.calls.push(args);
        console.log(arguments);
        return func.apply(this, arguments);
    }
    func_arguments.calls = [];

    return func_arguments;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}