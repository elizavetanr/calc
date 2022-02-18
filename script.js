let display = '0';
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
function outputDisplay() {
    document.body.children[0].children[0].textContent = display;
};
outputDisplay();

function changeSize() {
    if (display.length > 6) {
        document.body.children[0].children[0].style.cssText="font-size: 32px; top: 50px;"
    }
    if (display.length < 7) {
        document.body.children[0].children[0].style.cssText="font-size: 96px; top: 21px;"
    }
}

function delNull() {
    if (display === '0') {
        display = '';
        outputDisplay();
    }
}

function cleanText () {
    if (display === 'Infinity' || display === 'Error' || display === 'unknown operation' ) {
        display = '';
        outputDisplay();
    }
}

function checkOperation() {
    for (let char of display) {
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
        display += elem.textContent;
        outputDisplay();
    });
    elem.addEventListener("click", changeSize);
}


let operations = document.querySelectorAll('button.operations');
for (let elem of operations) {
    elem.addEventListener("click", delNull);
    elem.addEventListener("click", cleanText);
    elem.addEventListener("click", checkOperation);
    elem.addEventListener("click", function() {
        display += elem.textContent;
        outputDisplay();
    });
    elem.addEventListener("click", changeSize);
}

num0.addEventListener("click", delNull);
num0.addEventListener("click", cleanText);
num0.addEventListener("click", function() {
    display += 0;
    outputDisplay();
});
num0.addEventListener("click", changeSize);

function canceling() {
    document.body.children[0].children[0].style.cssText="font-size: 96px; top: 21px;"
    display = '0';
    outputDisplay();
}
function cleaning() {
    if (display.length === 1 || display === 'Infinity' || display === 'Error' || display === 'unknown operation' ) {
        display = '0';
        outputDisplay();
    } else {
        display = display.slice(0, -1);
        outputDisplay();
    }
}
cancel.addEventListener("click", canceling);
clean.addEventListener("click", cleaning);
clean.addEventListener("click", changeSize);

function equaling() {
    let a;
    let b;
    let separator;
    let operation;
    let lastSymbolDisplay = display[(display.length - 1)];
    if (lastSymbolDisplay === '+' || lastSymbolDisplay === '-' || lastSymbolDisplay === '×' || lastSymbolDisplay === '÷') {
        display = display.slice(0, -1);
        outputDisplay();
    } else {
        for (let char of display) {
            if (char === '+' || char === '-' || char === '×' || char === '÷') {
                separator = char;
            }
        }
        ;
        let operators = display.split(separator);
        if (operators.length === 3) {
            a = -(+(operators[1]));
            b = +(operators[2]);
        } else {
            a = +(operators[0]);
            b = +(operators[1]);
        }
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
        display = Calc(operation, a, b);
        outputDisplay();
    };
};
equal.addEventListener("click", changeSize);
equal.addEventListener("click", equaling);
