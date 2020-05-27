/*Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.*/


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));

function aclean(array) {
    let anagrams_map = new Map();

    array.forEach(elements => {
        let word_sorted = elements.toLowerCase().split("").sort().join("");
        anagrams_map.set(word_sorted, elements);
    });
    return Array.from(anagrams_map.values());
}