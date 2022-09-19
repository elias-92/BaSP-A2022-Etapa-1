console.log('--EXCERCISES 3: ARRAYS');

/*
    Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/
console.log('\n-Excercises 3.a');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Los meses 5 y 11 son: ' + months[months.length - 8] + ' y ' + months[months.length - 2]);


/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log('\n-Excercises 3.b');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Array sorted alphabetically: ',months.sort());

/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
console.log('\n-Excercises 3.c');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
var addBeginningElement = months.unshift('first element');
var addEndElement = months.push('last element');
console.log('Array with added elements: ' , months);

/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
console.log('\n-Excercises 3.d');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
var deleteBeginningElement = months.shift('Enero');
var deleteEndElement = months.pop('Diciembre');
console.log('Array with elements removed: ' , months);

/*Invertir el orden del array (utilizar reverse).*/
console.log('\n-Excercises 3.e');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Array sorted from end to beginning: ' ,months.reverse());

/*Unir todos los elementos del array en un único string donde cada mes este separado por un guión
- (utilizar join).*/
console.log('\n-Excercises 3.f');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Months separated by a - : ', months.join(' - '));

/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
console.log('\n-Excercises 3.g');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Array from May to November: ', months.slice(4, 11));
