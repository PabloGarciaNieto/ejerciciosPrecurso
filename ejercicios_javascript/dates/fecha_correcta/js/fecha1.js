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

console.log(validaFecha(20, 4, 1976));

console.log(validaFecha(31, 3, 2020)); //Abril no tiene 31 días

console.log(validaFecha(29, 1, 2100)); //Los años que terminan en 00 no son bisiestos

console.log(validaFecha(31, 0, 2018));

