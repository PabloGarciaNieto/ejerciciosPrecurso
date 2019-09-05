const numTel = prompt('Escribe un número de teléfono.');

const regex = /^[679]{1}[0-9]{8}$/; // que la cadena se inicie con 6,7 o 9 una vez, le sigan ocho nº del 0 al 9 y termine la cadena
                                    // así aseguras que la cadena empieze por 6,7 o 9 y que contenga 9 números ni uno más ni uno menos.

if (regex.test(numTel)) {

    console.log('El número de teléfono ' + numTel + ' es valido.')
} else {
    console.log('Número de teléfono incorrecto.');
}

/* A ESTO SE LELLAMA MATAR MOSCAS A CAÑONAZOS!! XD!
const l = numTel.length;

function telefono(numTel, l) {
    if (/^6/.test(numTel) && l == 9 ) {
        return true;
    } else if (/^7/.test(numTel) && l == 9) {
        return true;
    } else if (/^9/.test(numTel) && l == 9) {
        return true;
    } else {
        return false;
    }
}

console.log(telefono(numTel, l));
*/

