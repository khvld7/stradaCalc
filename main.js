const firstNumber =  (document.getElementById('firstNumber'));
firstNumber.addEventListener('keydown', function(){});

const secondNumber =(document.getElementById('secondNumber'));
secondNumber.addEventListener('keypress', function(){})

const list = document.getElementById('operation');
list.addEventListener('change', function (){});

let equal = document.getElementById('equal');
equal.addEventListener('click', function knopka(){
    
    if (list.value == '+') {
        result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    } else if (list.value == '-') {
        result = firstNumber.value - secondNumber.value;
    } else if (list.value == '*') {
        result = firstNumber.value * secondNumber.value
    } else if(list.value == '/'){
       result = firstNumber.value / secondNumber.value;
    } else {
        alert('Неверная операция');
    }
    document.getElementById('resultat').innerHTML = result;
});