const frase = window.prompt('Escribe una frase de la que quieras saber si es un palíndromo');

function espalindromo(texto) {

    if (!texto) {
         return false;
    }

    let plaintext = texto.replace(/ /g, '');  //elimino los espacios en blanco
     plaintext = plaintext.toLowerCase();     //Convierto a minúsculas

    for (i = 0; i < plaintext.length / 2; i++) {                      //Comparo las primeras letras con las últimas de manera sucesiva
        if (plaintext[i] !== plaintext[plaintext.length - (i + 1)]) {
            return false;
        } 
    }
     return true;
}

espalindromo(frase);

if (espalindromo(frase)) {
    console.log(`Pues sí, el texto: ${frase}, es palíndromo.`);
} else {
    console.log(`Me temo que el texto: ${frase}, no es un palíndromo.`);
}






