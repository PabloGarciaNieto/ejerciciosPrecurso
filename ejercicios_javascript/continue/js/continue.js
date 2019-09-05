const array1 = [-2, 3, 0];

let resultado = 0;

function suma(array) {

    for (let i = 0; i < array.length; i++) {

        resultado += array[i];
    }
    return resultado;
}


console.log(`La suma de los elementos del array ${arra1} es: ${suma(arra1)}`);