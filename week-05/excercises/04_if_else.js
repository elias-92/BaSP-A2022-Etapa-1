console.log('--EXCERCISES 4: IF_ELSE');

/*Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y 
sino un alerta con el mensaje “Lower than 0,5”.*/
console.log('\n-Excercises 4.a');

var numRandom = Math.random()*1;
if (numRandom >= 0.5) {
    alert('-Excercises 4.a \n Random number from 0 to 1 \n' + numRandom + '\n Greater than 0,5');
} else {
    alert('-Excercises 4.a \n Random number from 0 to 1 \n' + numRandom + '\n Lower than 0,5')
}
/*Crear una variable “Age” que contenga un número entero entre 0 y 100 y 
muestre los siguientes mensajes de alerta:

“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.*/
console.log('\n-Excercises 4.b');

var age = Math.floor(Math.random() * 100);
if (age < 2) {
    alert('-Excercises 4.b. The result is: ' + age + '\n A Bebe');
}else if(age >= 2 && age <= 12){
    alert('-Excercises 4.b. The result is: ' + age + '\n A Niño');
}else if(age >= 13 && age <= 19){
    alert('-Excercises 4.b. The result is: ' + age + '\n A Joven');
}else if(age >= 20 && age <= 30){
    alert('-Excercises 4.b. The result is: ' + age + '\n A Adolescente');
}else if(age >= 31 && age <= 60){
    alert('-Excercises 4.b. The result is: ' + age + '\n A Adulto');
}else if(age >= 61 && age <= 75){
    alert('-Excercises 4.b. The result is: ' + age + '\n A Adulto');
}
else {
    alert('-Excercises 4.b. The result is: ' + age + '\n A Anciano');
}