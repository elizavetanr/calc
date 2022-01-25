function Calc(operation, a, b) {
    const operations = {
        sum: (a + b),
        sub: (a - b),
        multi: (a * b),
        div: (a / b),
        rem: (a % b),
        exp: (a ** b),
    }
    const isNotValid = (typeof operation === 'undefined' || typeof a !== 'number' || typeof b !== 'number');
    if (isNotValid) {
        return ('Error');
    }
    if (operations[operation]) {
        return(operations[operation]);
    } else {
        return('unknown operation');
    }
}
console.log(Calc('sum', 2, 3));
console.log(Calc(1, 2, 3));
console.log(Calc('sum', 2, '3'));
console.log(Calc(1, 2));
