/**
 * Created by nedwaldie on 11/16/16.
 */
'use strict';

(function() {
    // var firstNumber = document.getElementById('firstNumber').value;
    // var secondNumber = document.getElementById('secondNumber').value;
    // When a number is pressed
    var btnPressed = function() {
        if (document.getElementById('operator').value == '' ||document.getElementById('operator').value == '^2' || document.getElementById('operator').value == '%') {
            document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += this.innerHTML;
        } else {
            document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += this.innerHTML
        }
    };

    // When an operator is pressed
    var operatorPressed = function() {
            document.getElementById('operator').value = this.innerHTML;
    };

    // When clear is selected
    var clear = function() {
        document.getElementById('operator').value = '';
        document.getElementById('firstNumber').value = '';
        document.getElementById('secondNumber').value = '';
    };

    // decimal function
    var decimal = function() {
        var str = document.getElementById('firstNumber').value;
        var str2 = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '' ||document.getElementById('operator').value == '^2' || document.getElementById('operator').value == '%') {
            if (str.indexOf('.') >= 0) {
                return document.getElementById('firstNumber').value;
            } else {
                document.getElementById('firstNumber').value = document.getElementById('firstNumber').value += this.innerHTML;
            }
        } else {
            if (str2.indexOf('.') >= 0) {
                return document.getElementById('secondNumber').value;
            } else {
                document.getElementById('secondNumber').value = document.getElementById('secondNumber').value += this.innerHTML;
            }
        }
    };

    // Is number an int or float
    // var total = function() {
    //     console.log('total function called');
    //     // var firstNumber = document.getElementById('firstNumber').value;
    //
    //     if (firstNumber % 1 == 0) {
    //         document.getElementById('firstNumber').value = firstNumber;
    //     } else {
    //         console.log(document.getElementById('firstNumber').value);
    //         console.log(firstNumber);
    //         // document.getElementById('firstNumber').value = firstNumber.toFixed(2);
    //     }
    // }


    // This function gives me my total
    var equals = function() {
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        if (document.getElementById('operator').value == '%') {
            firstNumber = parseFloat(firstNumber) / 100;
            document.getElementById('firstNumber').value = firstNumber;
            document.getElementById('secondNumber').value = '';
            return;
        } else if (firstNumber == '' || secondNumber == '' || document.getElementById('operator').value == ''){
            return;
        }

        if (document.getElementById('operator').value == '+') {
            firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
            // this is where i check to see if this is a integer or a float(else statement)
            if (firstNumber % 1 == 0) {
                document.getElementById('firstNumber').value = firstNumber;
            } else {
                document.getElementById('firstNumber').value = firstNumber.toFixed(2);
            }
            document.getElementById('secondNumber').value = '';
        } else if (document.getElementById('operator').value == '-') {
            firstNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
            if (firstNumber % 1 == 0) {
                document.getElementById('firstNumber').value = firstNumber;
            } else {
                document.getElementById('firstNumber').value = firstNumber.toFixed(2);
            }
            document.getElementById('secondNumber').value = '';
        } else if (document.getElementById('operator').value == '/' && secondNumber == 0) {
            document.getElementById('firstNumber').value = firstNumber;
            document.getElementById('secondNumber').value = '';
            document.getElementById('zeroDiv').style.display = 'block';
        } else if (document.getElementById('operator').value == '/') {
            firstNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
            if (firstNumber % 1 == 0) {
                document.getElementById('firstNumber').value = firstNumber;
            } else {
                document.getElementById('firstNumber').value = firstNumber.toFixed(2);
            }
            document.getElementById('secondNumber').value = '';
            document.getElementById('zeroDiv').style.display = 'none';
        } else if (document.getElementById('operator').value == '*') {
            firstNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
            if (firstNumber % 1 == 0) {
                document.getElementById('firstNumber').value = firstNumber;
            } else {
                document.getElementById('firstNumber').value = firstNumber.toFixed(2);
            }
            document.getElementById('secondNumber').value = '';
        } else if (document.getElementById('operator').value == '^') {
            firstNumber = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
            if (firstNumber % 1 == 0) {
                document.getElementById('firstNumber').value = firstNumber;
            } else {
                document.getElementById('firstNumber').value = firstNumber.toFixed(2);
            }
            document.getElementById('secondNumber').value = '';
        } else if (document.getElementById('operator').value == '%') {
            firstNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
            if (firstNumber % 1 == 0) {
                document.getElementById('firstNumber').value = firstNumber;
            } else {
                document.getElementById('firstNumber').value = firstNumber.toFixed(2);
            }
            document.getElementById('secondNumber').value = '';
        }
    };

    // making a number a positive or a negative
    var negative = function() {
        var firstNumber = document.getElementById('firstNumber').value;
        var secondNumber = document.getElementById('secondNumber').value;
        var strFirstNumber = '';
        var strSecondNumber = '';
        if (document.getElementById('operator').value == '' ||document.getElementById('operator').value == '^2' || document.getElementById('operator').value == '%') {
            document.getElementById('firstNumber').value = parseFloat(document.getElementById('firstNumber').value) * -1;
            strFirstNumber = document.getElementById('firstNumber').value;
            document.getElementById('firstNumber').value = strFirstNumber;
        } else {
            document.getElementById('secondNumber').value = parseFloat(document.getElementById('secondNumber').value) * -1;
            strSecondNumber = document.getElementById('secondNumber').value;
            document.getElementById('secondNumber').value = strSecondNumber;
        }
    };

    // Adding my buttons
    var buttons = {
        power: document.getElementById('power'),
        percentage: document.getElementById('percentage'),
        negative: document.getElementById('negative'),
        plus: document.getElementById('plus'),
        decimal: document.getElementById('decimal'),
        minus: document.getElementById('minus'),
        divide: document.getElementById('divide'),
        multiply: document.getElementById('multiply'),
        clear: document.getElementById('clear'),
        equals: document.getElementById('equals'),
        one: document.getElementById('one'),
        two: document.getElementById('two'),
        three: document.getElementById('three'),
        four: document.getElementById('four'),
        five: document.getElementById('five'),
        six: document.getElementById('six'),
        seven: document.getElementById('seven'),
        eight: document.getElementById('eight'),
        nine: document.getElementById('nine'),
        zero: document.getElementById('zero')
    };

    // Adding my event listeners
    buttons.power.addEventListener('click', operatorPressed);
    buttons.percentage.addEventListener('click', operatorPressed);
    buttons.negative.addEventListener('click', negative);
    buttons.plus.addEventListener('click', operatorPressed);
    buttons.minus.addEventListener('click', operatorPressed);
    buttons.divide.addEventListener('click', operatorPressed);
    buttons.multiply.addEventListener('click', operatorPressed);
    buttons.clear.addEventListener('click', clear);
    buttons.equals.addEventListener('click', equals);
    buttons.decimal.addEventListener('click', decimal);
    buttons.one.addEventListener('click', btnPressed);
    buttons.two.addEventListener('click', btnPressed);
    buttons.three.addEventListener('click', btnPressed);
    buttons.four.addEventListener('click', btnPressed);
    buttons.five.addEventListener('click', btnPressed);
    buttons.six.addEventListener('click', btnPressed);
    buttons.seven.addEventListener('click', btnPressed);
    buttons.eight.addEventListener('click', btnPressed);
    buttons.nine.addEventListener('click', btnPressed);
    buttons.zero.addEventListener('click', btnPressed);

})();