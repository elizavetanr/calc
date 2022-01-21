function calc(operation, a, b) {
    const isNotValid = (typeof operation === 'undefined' || typeof a !== 'number' || typeof b !== 'number');
    if (isNotValid) {
        return 'Error';
    } else {
        switch (operation) {
            case 'sum':
                return (+a + +b);
            case 'sub':
                return (a - b);
            case 'multi':
                return (a * b);
            case 'div':
                return (a / b);
            case 'rem':
                return (a % b);
            case 'exp':
                return (a ** b);
            default:
                return 'unknown operation';
        }
    }
}
console.log(calc('sum', 5, 4));
console.log(calc('no', 5, 4));
console.log(calc(5, 4));
