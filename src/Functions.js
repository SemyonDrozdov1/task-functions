/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
    function arr(value, index, array) {
        return value > num;
    }
    return arr;
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
    function arr(value, index, array) {
        return value.includes(substr);
    }
    return arr;
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    let multi = num;
    return function (num) {
        return num * multi;
    };
}
