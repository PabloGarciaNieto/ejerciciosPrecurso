
function validaFecha(dia, mes, anio) {
    if (anio < 0) {
        return false;
    }
    if (mes < 0 || mes > 11) {
        return false;
    }
    if (dia < 1 || dia > 31) {
        return false;
    }

    /*año bisiesto (o año intercalar) Año que tiene 366 días en lugar de 365, en el que febrero tiene 29 días en lugar de 28;
     se repite cada cuatro años, excepto cuando el año acaba en dos ceros*/

    //comprobamos si el año no es bisiesto y nos estan pasando el 29 de Febrero
    if (!(anio % 4 === 0 && anio % 100 !== 0) && mes === 1 && dia === 29) {
        return false;
    }

    //comprobamos que no nos pasen dia 31 en meses de 30 o 28
    if ((mes === 1 || mes === 3 || mes === 5 || mes === 8 || mes === 10 ) && dia > 30) {
        return false;
    } else {
    return new Date(anio, mes, dia);
    }
}


const fecha = prompt('Escribe una fecha con formato: dd/MM/yyyy');


function validaFechaString(fecha) {
    const partes = fecha.split('/');

    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let anio = parseInt(partes[2]);
    mes = mes - 1;                       // Así el mes es el introducido por el usuario, si no sería el siguiente al elegido pues 0-11

        return validaFecha(dia, mes ,anio ); 
}       // Esta función llama a la primera y la ejecuta dentro de sí misma. Una función puede invocar a otra.

console.log(validaFechaString(fecha));

console.log(Date.now());

const datty = new Date();
console.log(datty.getTimezoneOffset());