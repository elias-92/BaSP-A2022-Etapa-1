console.log('--EXCERCISES 1: VARIABLES AND OPERATORS');

/* a. Crear dos variable numericas y utilizar el operador suma para guardar
el valor de la suma de ambos numeros en una 3era variable.*/
console.log('\n-Excercises 1.a');
var number1 = 5;
var number2 = 10;
var suma = number1 + number2;
console.log('The value of the sum is: ', suma);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log('\n-Excercises 1.b');
var firstName = 'Elias ';
var lastName = 'Martinez';
var nameComplete = firstName  + lastName;
console.log('My name complete is: ', nameComplete);

/*
Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado de la suma en una 3er variable (utilizar length).
*/
console.log('\n-Excercises 1.c');
var product1 = 'Armario';
var product2 = 'Dormitorio';
var sumLetters = product1.length + product2.length;
console.log('the sum of letters is: ', sumLetters);