console.log('--EXCERCISES 2: STRING');

/*Crear una variable de tipo string con al menos 10 caracteres y convertir
todo el texto en mayúscula (utilizar toUpperCase).*/
console.log('\n-Excercises 2.a');
var upperCaseWord  = 'rehabilitation'.toUpperCase();
console.log('Word from lowercase to uppercase: ', upperCaseWord);


/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('\n-Excercises 2.b');
var wholeWord = 'homosapien';
var first5Letter = wholeWord.substring(0, 5);
console.log('Word with the first 5 letters: ', first5Letter);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('\n-Excercises 2.c');
var word = 'structural';
var last3letter = word.substring(word.length - 3);
console.log('The last 3 letters are: ', last3letter);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log('\n-Excercises 2.d');
var lowerCaseWord = 'indestructible';
var upperCaseFirstLtter = 
lowerCaseWord.substring(0, 1).toUpperCase() + lowerCaseWord.substring(1).toLowerCase();
console.log('First capital letter: ', upperCaseFirstLtter);

/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('\n-Excercises 2.e');
var welcome = 'hello world';
var firstSpace = welcome.indexOf(' ');
console.log('the first space is found at the index: ', firstSpace);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +)*/
console.log('\n-Excercises 2.f');
var words = 'wireLess deviCes';
var firstLetterUpperCase = words.substring(0, 1).toUpperCase() +
words.substring(1, words.indexOf(' ') + 1).toLowerCase();

var secondLetter = words.substring(words.indexOf(' ') + 1, words.indexOf(' ') + 2 ).toUpperCase() + 
words.substring(words.indexOf(' ') + 2).toLowerCase();

console.log(firstLetterUpperCase + secondLetter);



