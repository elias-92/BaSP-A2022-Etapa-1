console.log('--EXCERCISES 6: FUNCTIONS');

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha 
variable en la consola del navegador.*/
console.log('\n-Excercises 6.a');
function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(2,5);
console.log('The result is: ' + result);

/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene
error y retornar el valor NaN como resultado.*/
console.log('\n-Excercises 6.b');
function validationNumber(num1, num2) {
    if (typeof num1 !== 'number') {
        alert('-Excercises 6.b. The values are not number, please enter a number: ' + num1);
        return NaN;
    } else if (typeof num2 !== 'number'){
        alert('-Excercises 6.b. The values are not number, please enter a number: ' + num2);
        return NaN;
    } else{
        return sum(num1, num2);
    }
};
console.log('The entered values are incorrect, the result is: ' + validationNumber(2, '10'));
console.log('The entered values are correct, the result is: ' + validationNumber(2, 10));

/*Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero
si es un número entero.*/
console.log('\n-Excercises 6.c');
function validateInteger(num) {
    return Number.isInteger(num);   
};
console.log('you entered an incorrect value, the result is: ' + validateInteger('5'));
console.log('you entered an correct value, the result is:' + validateInteger(5));

/*A la función suma del ejercicio 6b agregarle una llamada a la función del ejercicio 6c. y que valide
que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el
número convertido a entero (redondeado).*/
console.log('\n-Excercises 6.d');
function sumAndValidation(num1, num2) {
    if (typeof num1 !== 'number') {
        alert('-Excercises 6.d. The one value is not number, please enter a number: ' + num1);
        return NaN;
    }
    if (typeof num2 !== 'number'){
        alert('-Excercises 6.d. The second value is not number, please enter a number: ' + num2);
        return NaN;
    }
    if (!validateInteger(num1)){
        alert('-Excercises 6.d \n Not a integer number ' + num1 + '\n we round it to: ' + Math.round(num1));
        num1 = Math.round(num1);
    }
    if (!validateInteger(num2)){
        alert('-Excercises 6.d \n Not a integer number ' + num2 + '\n we round it to: ' + Math.round(num2));
        num2 = Math.round(num2);
    }
        return sum(num1, num2);
};
console.log('The result with wrong value is: ' + sumAndValidation('2.4', 5) );
console.log('The result with rounded value is: ' + sumAndValidation(4.6, 5.8) );

/*Convertir la validación del ejercicio 6d en una función separada y llamarla dentro de la función suma 
probando que todo siga funcionando igual.*/
console.log('\n-Excercises 6.e');

function validation(num) {
    if (typeof num !== 'number') {
        alert('-Excercises 6.e. The value entered is not a number ' + num);
        return NaN;
    }else if (!validateInteger(num)){
        alert('-Excercises 6.e \n Not a integer number ' + num + '\n we round it to: ' + Math.round(num));
        return Math.round(num);
    } else{
        return num;
    }
};

function sum1(num1, num2) {
    num1 = validation(num1);
    num2 = validation(num2);
    return num1 + num2;
};

console.log('The result of exercise 6.e is: ' + sum1(2.7, 13.7));
