function add() {
    2 + 2
}
function subtract() {
    4 - 1
}
function multiply() {
    4 * 20
}
function divide() {
    1337 / 191
}

function add(a, b) {
    return a += b;
}
function subtract(a, b) {
    return a -= b;
}
function multiply(a, b) {
    return a *= b;
}
function divide(a, b) {
    return a /= b;
}

function increment(n) {
    return ++n;
}
function decrement(n) {
    return --n;
}

function makeInt(n) {
    return parseInt(n, 10);
}
function preserveDecimal(n) {
    return parseFloat(n);
}