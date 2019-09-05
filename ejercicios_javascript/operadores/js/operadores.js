

const myArray = [true, 'Curso', 65, 4, 'javaScript', false];

let pal1 = myArray[1];
let pal2 = myArray[4];

if (pal1 > pal2) {
    console.log('El string: ' + pal1 + ', es el mayor.');
} else {
    console.log('El string: ' + pal2 + ', es el mayor.');
}

let num1 = myArray[2];
let num2 = myArray[3];

console.log( num1 + num2, num1 - num2, num1 % num2, num1 ** num2);

let boo1 = myArray[0];
let boo2 = myArray[5];

let falso = boo1 && boo2;
let verdadero = boo1 || boo2;

console.log('el operador booleano && entre true y false devuelve: ' + falso);
console.log('el operador booleano || entre true y false devuelve: ' + verdadero);