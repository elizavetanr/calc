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
        console.log('Error');
    } else if (operations[operation] !== undefined) {
    console.log(operations[operation]);
    } else {
        console.log('unknown operation');
    }
}
Calc('sum', 2, 3);
Calc('div', 6, 3)
Calc(2, 3)
Calc('sum', '2', 3)
Calc(5, 2, 3);
