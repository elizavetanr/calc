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
        return('Error');
    }
    if (operations[operation]) {
        return(operations[operation]);
    } else {
        document.body.children[0].children[0].style.cssText="font-size: 32px; top: 50px;"
        return('unknown operation');
    }
}
function defaultNull() {
    document.body.children[0].children[0].textContent = 0;
};
defaultNull();

function changeSize() {
    if ((document.body.children[0].children[0].textContent).length > 6) {
        document.body.children[0].children[0].style.cssText="font-size: 32px; top: 50px;"
    }
    if ((document.body.children[0].children[0].textContent).length < 7) {
        document.body.children[0].children[0].style.cssText="font-size: 96px; top: 21px;"
    }
}

function delNull() {
    if (document.body.children[0].children[0].textContent === '0') {
        document.body.children[0].children[0].textContent = '';
    }
}

function cleanText () {
    if (document.body.children[0].children[0].textContent === 'Infinity' || document.body.children[0].children[0].textContent === 'Error' || document.body.children[0].children[0].textContent === 'unknown operation' ) {
        document.body.children[0].children[0].textContent = '';
    }
}

function checkOperation() {
    let str = (document.body.children[0].children[0].textContent);
    for (let char of str) {
        if (char === '+' || char === '-' || char === '×' || char === '÷') {
                equaling();
        }
    };
}

let numbers = document.querySelectorAll('button.numbers');
for (let elem of numbers) {
    elem.addEventListener("click", delNull);
    elem.addEventListener("click", cleanText);
    elem.addEventListener("click", function() {
        document.body.children[0].children[0].textContent += elem.textContent;
    });
    elem.addEventListener("click", changeSize);
}


let operations = document.querySelectorAll('button.operations');
for (let elem of operations) {
    elem.addEventListener("click", delNull);
    elem.addEventListener("click", cleanText);
    elem.addEventListener("click", checkOperation);
    elem.addEventListener("click", function() {
        document.body.children[0].children[0].textContent += elem.textContent;
    });
    elem.addEventListener("click", changeSize);
}

num0.addEventListener("click", delNull);
num0.addEventListener("click", cleanText);
num0.addEventListener("click", function() {
    document.body.children[0].children[0].textContent += 0;
});
num0.addEventListener("click", changeSize);

function canceling() {
    document.body.children[0].children[0].style.cssText="font-size: 96px; top: 21px;"
    document.body.children[0].children[0].textContent = '0';
}
function cleaning() {
    if ((document.body.children[0].children[0].textContent).length === 1 || document.body.children[0].children[0].textContent === 'Infinity' || document.body.children[0].children[0].textContent === 'Error' || document.body.children[0].children[0].textContent === 'unknown operation' ) {
        document.body.children[0].children[0].textContent = '0';
    } else {
        document.body.children[0].children[0].textContent = (document.body.children[0].children[0].textContent).slice(0, -1);
    }
}
cancel.addEventListener("click", canceling);
clean.addEventListener("click", cleaning);
clean.addEventListener("click", changeSize);

function equaling() {
let separator;
let operation;
let str = (document.body.children[0].children[0].textContent);
for (let char of str) {
    if (char === '+' || char === '-' || char === '×' || char === '÷') {
        separator = char;
    }
};
    let operators = (document.body.children[0].children[0].textContent).split(separator);
    a = +(operators[0]);
    b = +(operators[1]);
    switch (separator) {
        case '+':
            operation = 'sum';
            break;
        case '-':
            operation = 'sub';
            break
        case '×':
            operation = 'multi';
            break;
        case '÷':
            operation = 'div';
            break;
        default:
    }
    document.body.children[0].children[0].textContent = Calc(operation, a, b);
};
equal.addEventListener("click", changeSize);
equal.addEventListener("click", equaling);



