const frase = ['Todos','los','hombres','deben','morir','John','Snow','Pero','primero','viviremos'];

console.log(frase);

let palabro = prompt('Escribe una palabra de la frase que ves en pantalla.');

let pos = frase.indexOf(palabro);

if (pos !== -1) {
    console.log(`La palabra: \"${palabro}\", está en la posición ${pos} del Array`);
    
} else {
    console.log(`\"${palabro}\" no pertenece a la frase`);
}

// siguiente método algo menos directo que buscar indexOf

const texto = ['Esta', 'Blue', 'es', 'la', 'risa'];

console.log(texto);

let palabrita = prompt('Escribe una palabra de la segunda frase aparecida en pantalla.');

let posi = -1;

for (let i = 0; i < texto.length; i++) {

    if (texto[i] === palabrita) {

        posi = i;

        console.log(`La palabra: \"${palabrita}\", está en la posición ${posi} del Array`);

        break;
    }
}

if (posi === -1) {
    console.log(`\"${palabrita}\" no pertenece a la frase`);
}

//-------------------------Buscar posiciones y número de veces que aparece un elemento en un ARRAY--------------------------

const numelos = [1, 2, 2, 3, 8, 2];

console.log(numelos);

const num1 = parseInt(prompt('Introduce un número para buscar dentro del Array'));

let count = 0;

let match;

if (numelos.indexOf(num1) !== -1) {

    for (let i = 0; i < numelos.length; i++) {

        if (numelos[i] === num1) {
            match = numelos.indexOf(num1, match + 1);
            console.log(`El número ${num1} aparece en la posición ${match + 1}`);
            count++;
          
        }
    }

    console.log(`El número ${num1} aparece ${count} veces en el array`); 

} else {
    console.log(`El número ${num1} no aparece en el array`);
}