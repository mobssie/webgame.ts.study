var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var string = 'ddd';
var boolean = true;
var wordNumber = document.createElement('div');
wordNumber.textContent = numberOne + " * \uACF1\uD558\uAE30 " + numberTwo + "\uB294?";
document.body.append(wordNumber);
var form = document.createElement('form');
var hello = document.body.append(form);
var input = document.createElement('input');
input.type = 'number';
form.append(input);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var resultDiv = document.createElement('div');
document.body.append(resultDiv);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (result === Number(input.value)) {
        resultDiv.textContent = '딩동댕';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        result = numberOne * numberTwo;
        wordNumber.textContent = numberOne + " \uACF1\uD558\uAE30 " + numberTwo + "\uB294?";
        input.value = '';
        input.focus();
    }
    else {
        resultDiv.textContent = '땡';
        input.value = '';
        input.minLength = 3;
        input.focus();
    }
});
