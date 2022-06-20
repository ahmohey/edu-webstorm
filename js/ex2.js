function getInput() {//id = # , class = .
    let getA = parseFloat(document.querySelector('#inputA').value);
    let getB = parseFloat(document.querySelector('#inputB').value);
    let getOp = document.querySelector('#operator').value;

    let result;
    if (getOp == 'plus') {
        result = getA + getB;
    } else if (getOp == 'minus') {
        result = getA - getB;
    } else if (getOp == 'multiply') {
        result = getA * getB;
    } else if (getOp == 'divide') {
        result = getA / getB;
    }


    document.querySelector('#result').value = result;
}


